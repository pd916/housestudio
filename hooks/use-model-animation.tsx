import { useGSAP } from "@gsap/react"; 
import gsap from "gsap";
import * as THREE from "three";
import React from 'react'

interface useModelAnimationProps {
  modelRef: React.RefObject<THREE.Object3D | null>;
  activeWork: number | null;
  color: string | string[];
  isMobile: boolean
}

const useModelAnimation = ({modelRef, activeWork, color, isMobile}:useModelAnimationProps) => {
  useGSAP(() => {
    if (!modelRef.current) return;
  
    //Pose feature
    const POSE_MAP: Record<number, { rot: [number, number, number]; pos: [number, number, number] }> = {
       1: { rot: [0.02, 0.0, 0], pos: [0, 0.03, 0] },
  
  // Left profile
  2: { rot: [0.0, -0.25, 0], pos: [0.02, 0.0, 0] },
  
  // Right profile
  3: { rot: [0.0, 0.25, 0], pos: [-0.02, 0.0, 0] },
  
  // Slight upward tilt (majestic look)
  4: { rot: [-0.08, 0.0, 0], pos: [0, 0.04, 0] },
  
  // Slight downward tilt (calm look)
  5: { rot: [0.08, 0.0, 0], pos: [0, -0.02, 0] },
  
  // Dynamic 3/4 angle (engaging)
  6: { rot: [0.05, 0.15, 0], pos: [0.015, 0.02, 0] },
    };
  
    const NEUTRAL = { rot: [0, 0, 0] as [number, number, number], pos: [0, 0, 0] as [number, number, number] };
    
    const target = activeWork ? POSE_MAP[activeWork] ?? NEUTRAL : NEUTRAL;
  
  
    gsap.to(modelRef.current.rotation, {
      x: target.rot[0],
      y: target.rot[1],
      z: target.rot[2],
      duration: 0.6,
      ease: "power3.out",
    });
  
    gsap.to(modelRef.current.position, {
      x: target.pos[0],
      y: target.pos[1],
      z: target.pos[2],
      duration: 0.6,
      ease: "power3.out",
    });

    //COLORCHANGING FETAURe
    modelRef.current.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      // console.log(mesh)
      
      const mat = mesh.material as THREE.MeshStandardMaterial;
  
      // IMPORTANT: enable vertex colors
      mat.vertexColors = true;
  
      if (Array.isArray(color)) {
        const [c1, c2] = color.map(c => new THREE.Color(c));
        const geom = mesh.geometry;
  
        const count = geom.attributes.position.count;
        const colors = new Float32Array(count * 3);
  
        for (let i = 0; i < count; i++) {
          const c = i % 2 === 0 ? c1 : c2;
          // const t = i / count; // gradient
          // const c = c1.clone().lerp(c2, t);
          colors[i * 3]  = c.r;
          colors[i * 3 + 1] = c.g;
          colors[i * 3 + 2] = c.b;
        }
  
        geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geom.attributes.color.needsUpdate = true;
        mat.needsUpdate = true;
  
      }
  
   else {
        const target = new THREE.Color(color);
        // console.log("Applying single color:", color);
  
        
        const geom = mesh.geometry;
        if (geom.getAttribute("color")) {
          geom.deleteAttribute("color");
        }
  
        mat.vertexColors = false;
  
        gsap.to(mat.color, {
          r: target.r,
          g: target.g,
          b: target.b,
          duration: 1.5,
          overwrite: "auto",
        });
  
        mat.emissive.setRGB(0, 0, 0);
        mat.emissiveIntensity = 0;
        mat.needsUpdate = true;
      }
    });

    if (!modelRef.current) return; 
    gsap.fromTo( modelRef.current.scale, { 
      x: isMobile ? 0.4 : 0.8, y: isMobile ? 0.4 : 0.8, 
      z: isMobile ? 0.4 : 0.8 
    }, { 
      x: isMobile ? 0.6 : 1, 
      y: isMobile ? 0.6 : 1, 
      z: isMobile ? 0.6 : 1, 
      duration: 1.2, ease: 
      "power3.out" 
    } ); 

  },[activeWork, color, isMobile])
}

export default useModelAnimation

