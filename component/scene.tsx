"use client";

import { Canvas} from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useStore } from "@/store/store";
import Image from "next/image";
import useModelAnimation from "@/hooks/use-model-animation";
import { useGSAP } from "@gsap/react";

type ModelProps = {
  isMobile: boolean;
};



function Model({isMobile}:ModelProps) {
  const { scene } = useGLTF("/scene.gltf");
  const modelRef = useRef<THREE.Object3D>(null);
  const color = useStore((s) => s.modelColor)
  const activeWork = useStore((s) => s.activeWork)

  useModelAnimation({modelRef, activeWork, color, isMobile})

  useEffect(() => {
    if (modelRef.current) {
      // MASSIVE scale boost for tiny models
    //  modelRef.current.scale.set(1, 1, 1); // was 10

      modelRef.current.rotation.set(0, 0, 0); // face camera


    modelRef.current?.traverse((child) => {
  if ((child as THREE.Mesh).isMesh) {
    const mesh = child as THREE.Mesh;

    mesh.material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#DAA520"),      // deep bluish base
      metalness: 1,                            // fully metallic
      roughness: 0.02,                         // smoother, soft metallic reflection
      // emissive: new THREE.Color("#DAA520"),    // warmer golden highlight
      emissiveIntensity: 0.4,                  // stronger glow for subtle shimmer
      side: THREE.DoubleSide,
    });
  }
});



    }

  }, [scene]);

useEffect(() => {
  if (!modelRef.current) return;

  const horse = modelRef.current;

  // Faster and more visible vertical breathing
  const breatheY = gsap.to(horse.position, {
    y: "+=0.1",       // bigger up movement
    duration: 0.6,     // faster breathing
    repeat: -1,        // infinite
    yoyo: true,
    ease: "sine.inOut",
  });

  // Slightly more noticeable head bob
  const breatheX = gsap.to(horse.rotation, {
    x: "+=0.02",      // bigger head tilt
    duration: 0.6,     // faster than before
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

   if (activeWork) {
    breatheY.pause();
    breatheX.pause();
  } else {
    breatheY.resume();
    breatheX.resume();
  }

  // Cleanup
  return () => {
    breatheY.kill();
    breatheX.kill();
  };
}, [activeWork]);





  return(
    <>
    <primitive object={scene} ref={modelRef} />;

    </>
  ) 
}

export default function Scene() {
   const bgImage = useStore((s) => s.bgImage);
   const bg = useStore((s) => s.bg)
  const bgRef = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => { 
    const check = () => setIsMobile(window.innerWidth < 768);  
    check();
    window.addEventListener("resize", check); 
    return () => window.removeEventListener("resize", check); 
  }, [])

  console.log(bgImage, "image")

  useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".line", {
    scaleX: 0,
    transformOrigin: "center center",
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
  });

  tl.from(".word", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
  }, "<");

}, []); // 👈 NO dependencies → runs once

useGSAP(() => {
  if (!bgRef.current) return;

  gsap.to(bgRef.current, {
    opacity: bgImage ? 1 : 0,
    duration: 0.8,
    ease: "power2.out",
  });

}, { dependencies: [bgImage] });


   useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const handleMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);


  
  return (
    <div className="w-full min-h-screen relative">

      <style>{`body { cursor: none; }`}</style>

   <div
  id="custom-cursor"
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "24px",
    height: "24px",
    pointerEvents: "none",
    zIndex: 50,
    transform: "translate(-50%, -50%)",
    border: "2px solid #FFD700", // gold border
    borderRadius: "50%",          // makes it circular
    backgroundColor: "transparent", // no fill
  }}
/>

  <h1 
  ref={headline}
  className="rus word flex flex-col top-26 absolute left-14 lg:left-auto lg:top-24 text-white lg:right-2/7 text-5xl lg:text-8xl leading-none text-shadow-2xs"
  ><span>
    We sp<span className="text-orange-300">a</span>rk
  </span>
  <span className="self-end">chaos</span></h1>

  <div className="absolute line h-[1px] left-12 bottom-[13rem] rounded -rotate-45 lg:bottom-[16rem] lg:left-28 bg-white w-2/7
  before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-left-2 before:-top-1.5
  after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:-right-2 after:-top-1.5
  "/>
  
  <div className="absolute line h-[1px] right-4 rounded -rotate-45 top-[15rem] lg:top-[18rem] lg:right-28 bg-white w-2/7
  before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-left-2 before:-top-1.5
     after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:-right-2 after:-top-1.5
  "/>

      <div
      ref={bgRef}
      className="fixed inset-0 w-full h-screen bg-black"
      style={{
        backgroundColor:"black",
        WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) var(--mask-start, 15%), rgba(0,0,0,0) var(--mask-end, 55%))",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "cover",
        maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) var(--mask-start, 15%), rgba(0,0,0,0) var(--mask-end, 55%))",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "cover",
        opacity: 0,
        zIndex: 1,
      }}
      >
        {bgImage && (
          <Image 
          src={bgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
          onLoadingComplete={() => {
          if (bgRef.current) {
            gsap.to(bgRef.current, { opacity: 1, duration: 0.8, ease: "power2.out" });

            gsap.fromTo(bgRef.current,
              { "--mask-start": "5%", "--mask-end": "20%" },
              { "--mask-start": "15%", "--mask-end": "55%", duration: 1.2, ease: "power3.out" }
            )
          }
        }}
    />
        )}
      </div>

      {bg && (
        <div
        className="fixed inset-0 w-full h-screen"
       style={{
    backgroundImage: `linear-gradient(135deg, var(--grad-color, ${bg}), #000000)`,
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%", // start at bottom-right
      willChange: "background-position",// start from bottom-left
  }}
          />
        )}

       <section className="fixed inset-0 pointer-events-none z-10">
      <Canvas
        shadows
        camera={{ position: [0, 0, isMobile ? 40 : 60], fov: isMobile ? 65 : 55}}
        style={{ background: "transparent" }}
        gl={{
          antialias: true,
          alpha: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
      >

        <ambientLight intensity={1.2} />

        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.7} />


        <Suspense fallback={null}>
           <group rotation={[0.1, -0.1, 0.3]} position={isMobile ? [8, -10, 0] : [16, -32, 0]} scale={isMobile ? 0.9 : 1}> 
      <Model isMobile={isMobile}/>
      
      <Environment files="/sunset.hdr" background={false}/>
    </group>
    
        </Suspense>

        {/* <OrbitControls /> */}

      </Canvas>
      </section>

    </div>
  );
}
