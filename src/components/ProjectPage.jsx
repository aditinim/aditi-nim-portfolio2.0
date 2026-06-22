'use client'
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import TextReveal from "./TextReveal";
import gsap, { ScrollTrigger } from "@/libs/gsap";
import useViewTransition from "@/hooks/useViewTransition";




const ProjectPage = ({ project, nextProject }) => {


    const containerRef = useRef(null);
    const imageRef = useRef(null);


    useGSAP(() => {

        const sections = gsap.utils.toArray('section');


        gsap.to(imageRef.current, {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.4,
            ease: "expo.out",
            delay: 1
        });

        sections.forEach((section, idx)=>{
            const container= section.children[0];

            gsap.to(container, {
                rotate: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: true,
                },

            });

            if(idx=== sections.length-1){
                return;
            }

            ScrollTrigger.create({
                trigger: section,
                start: 'bottom bottom',
                end: "bottom top",
                pin: true,
                pinSpacing: false
            })

        })

    }, { scope: containerRef });

    const {navigateTo}= useViewTransition();

    const handleClick= ()=>{
        navigateTo(`/project/${nextProject.slug}`);
        // console.log(navigateTo);
        

    }



    return (
        <>
            <main ref={containerRef}>

                <section className="h-screen flex w-full ">

                    <div className="sectionContainer h-full w-full flex pt-[6rem] pb-[4rem] px-[3rem]">
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
                    </div>

                </section>

                {project.gallery.map((elem, idx) => {
                    return (
                        <section key={idx} className="h-screen w-full">
                            <div style={{transformOrigin: "bottom left"}} className="sectionContainer rotate-[30deg] h-full w-full">
                                <img className="h-full w-full object-cover" src={elem} alt="" />
                            </div>
                        </section>
                    )
                })}

                <footer className="h-screen w-full flex flex-col items-center justify-center">
                    <h1>Next Project</h1>
                    <h1 onClick={handleClick}>{nextProject.title}</h1>
                </footer>
            </main>
        </>
    )
}

export default ProjectPage