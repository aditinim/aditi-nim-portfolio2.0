'use client'
import { useRef } from "react";
import TextReveal from "@/components/TextReveal";

export default function Home() {

  const triggerRef= useRef(null);

  const handleHoverEnter= ()=>{
    triggerRef.current?.play();
  }

  const handleHoverLeave= ()=>{
    triggerRef.current?.reverse();
  }

  return (
    
    <main className="h-[300vh] w-full bg-[#010101]">
      <div 
        onPointerEnter={handleHoverEnter} 
        onPointerLeave={handleHoverLeave}
        className="h-[8rem] w-[12rem] bg-red-500"></div>
      <TextReveal 
        ref={triggerRef} 
        splitBy='chars' 
        trigger= "manual"
        className= 'text-[3rem] text-white '>
        Hello everyone
      </TextReveal>
    </main>
  );
}
