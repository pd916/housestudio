'use client'
import Scene from "@/component/scene";
import { ICONS, TEXT_DETAILS } from "@/content";
import { useStore } from "@/store/store";

export default function Home() {
  const setActiveWork = useStore((s) => s.setActiveWork)
  const resetColor = useStore((s) => s.resetColor)
  return (
     <main className="relative w-full bg-[#A20F11]">
  
      <div className="absolute top-6 md:top-16 m:left-16 blur-2xl w-78 opacity-28 h-78 rounded-full  bg-[#FFCB01]"/>
      <div className="absolute top-1 md:right-28 blur-2xl w-128 opacity-28 h-128 rounded-full  bg-[#FFCB01]"/>
      <div className="absolute top-16 left-0 md:left-1/3 w-96 h-96 blur-sm rounded-full  bg-black"/> 
      {/* <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-black rounded-full blur-sm"/>
        
  {/* Your 3D scene */}
   <section className="h-screen w-full relative">
  <Scene/>
  </section>

  <section className="h-screen relative z-10 mt-8 py-28 rounded-t-lg">
     <div className="absolute lg:top-16 lg:right-28 blur-2xl w-128 opacity-28 h-128 rounded-full  bg-[#FFCB01]"/>
    <div className="px-24 mt-16 z-10">
        <h1 className="text-g hebo text-white font-semibold">We craft digital experiences where design, code, and emotion meet.</h1>
        <p className="text-xs text-white mt-4 leading-relaxed max-w-sm">A studio built for brands that want to stand out, not fit in.
        Our mission is simple:
        create bold, immersive work that sparks conversation and delivers real impact—across web, mobile, 3D, and everything in between.

        We blend creativity with engineering to shape
        interactive stories, high-performance products, and unforgettable brand moments.

        Let’s build what people remember.</p>

    <div className="top-1/2 right-8 flex gap-2 mt-4">
    {ICONS.map((item, index) => {
      const IconComponent = item.icon;
      return <IconComponent key={index} className="w-6 h-6 text-white cursor-pointer" />;
    })}
  </div>
  
    </div>

    </section>

    <section className="h-full z-10 relative mt-8 py-32 rounded-t-lg">
      <h2 className="text-lg px-28 text-white font-extralight hebo">Featured Work</h2>

      <div>
        {TEXT_DETAILS.map((item) => (
          <div key={item.label} className="flex items-center gap-8 my-8">
             <div className="w-8 h-[2px] bg-white mb-2"/>
          <h3 
          onMouseEnter={() => setActiveWork(item)}
          onMouseLeave={() => resetColor()}
          style={{ cursor: 'pointer', margin: '8px 0' }}
          className="text-4xl lg:text-8xl font-light hebo text-white"
          >{item.label}</h3>
          </div>
        ))}
      </div>
    </section>

    <section className="h-full relative z-10 mt-8 py-28 px-8 lg:px-14 rounded-t-lg">
      <div className="absolute h-[1px] rounded -rotate-45 right-1 lg:top-0 lg:right-28 bg-white w-2/8 lg:w-2/7
  before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-left-2 before:-top-1.5
     after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:-right-2 after:-top-1.5
  "/>

  <h2 className="rus text-xl text-white lg:max-w-sm">
    We believe that every interaction matters. Every pixel, every touchpoint, and every story is an opportunity to create something that not only looks beautiful but performs exceptionally
  </h2>

  <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-16 lg:gap-8 mt-28">
    <h2 className="hebo text-white text-xs lg:text-lg font-semibold lg:max-w-sm">At Abdull/studio, we blend creativity and technology to craft experiences that resonate. Operating globally from our hubs in Belgium and Chicago, we focus on designing products, brands, and digital experiences that leave a lasting impression</h2>
    <h2 className="hebo text-white max-w-sm">Our mission is simple: move people, spark emotion, and drive results. By combining thoughtful design with innovative solutions, we help clients—from Microsoft to The Kennedy Center, from Quanta Magazine to Dragone—achieve meaningful impact</h2>
  </div>

  <div className="absolute h-[1px] rounded rotate-45 bottom-16 lg:bottom-35 left-4 lg:left-28 bg-white w-2/8
  before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-left-2 before:-top-1.5
     after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:-right-2 after:-top-1.5
  "/>
    </section>


</main>
  );
}
