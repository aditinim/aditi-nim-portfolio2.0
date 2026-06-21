'use client'
import { useRef } from "react";
// import TextReveal from "@/components/TextReveal";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import { projects } from "@/data/projects";


export default function Home() {

  const triggerRef= useRef(null);

  const handleHoverEnter= ()=>{
    triggerRef.current?.play();
  }

  const handleHoverLeave= ()=>{
    triggerRef.current?.reverse();
  }

  return (
    
    <main className="h-screen flex items-start w-full ">
      <InfiniteCarousel projects={projects}></InfiniteCarousel>
    </main>
  );
}
