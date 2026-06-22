'use client'
import { useGSAP } from "@gsap/react";
import {useRef} from 'react';
import TextReveal from "./TextReveal";
import gsap from "@/libs/gsap";




const ProjectPage = ({project}) => {


    const containerRef= useRef(null);
    const imageRef= useRef(null);


    useGSAP(()=>{
        gsap.to(imageRef.current,{
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.4,
            ease: "expo.out",
            delay: 1
        })
    }, {scope: containerRef});



  return (
    <>
        <main ref={containerRef}>
            <section className="h-screen flex w-full pt-[6rem] pb-[4rem] px-[3rem]">
                <div className="firstSegment h-full w-[15%]">
                    <TextReveal>
                        <h3 className="text-[1.5rem]">{project.number}</h3>
                    </TextReveal>
                </div>

                <div className="secondSegment h-[85%] w-[30%] ">
                    <div className="imageDiv overflow-hidden h-full w-full">
                        <img 
                            ref={imageRef} 
                            style={{
                                clipPath: "inset(100% 0 0 0)",
                                scale: 1.4
                            }} 
                            src={project.coverImage} 
                            className="h-full w-full object-cover" 
                            alt="" />
                    </div>
                </div>

                <div className="thirdSegment pl-[5rem] h-[85%] w-[60%] flex flex-col justify-end leading-[2rem]">
                    <div className="heading">
                        <TextReveal delay="1" splitBy="chars">
                            <h1 className="text-[2rem] ">{project.title}</h1>
                        </TextReveal>
                    </div>

                    <div className="subHeading flex gap-[2rem]">
                        <TextReveal delay="1" splitBy="words">
                            <h1 className="text-[1rem]">{project.subtitle}</h1>
                        </TextReveal>

                        <TextReveal delay="1" splitBy="chars">
                            <h1 className="text-[1rem]">{project.year}</h1>
                        </TextReveal>
                    </div>

                    <div className="description w-[68%] mt-[1rem] text-balance leading-[1.2rem]">
                        <TextReveal delay="3" splitBy="lines">
                            <p className="text-[0.9rem] ">{project.description}</p>
                        </TextReveal>
                    </div>
                </div>
            </section>

            {project.gallery.map((elem, idx)=>{
                return (
                    <section key={idx} className="h-screen w-full bg-amber-200">
                        <div className="section-container h-full w-full">
                            <img className="h-full w-full object-cover" src={elem} alt="" />
                        </div>
                    </section>
                )
            })}
            
            <footer></footer>
        </main>
    </>
  )
}

export default ProjectPage