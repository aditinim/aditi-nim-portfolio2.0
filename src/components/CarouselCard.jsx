import {useRef} from 'react'
import TextReveal from './TextReveal';
import gsap from '@/libs/gsap';
import useViewTransition from '@/hooks/useViewTransition';

const CARD_W= 200;
const CARD_H= 280;
const SCALE= 1.35;



const CarouselCard = ({project, onHoverStart, onHoverEnd}) => {

    const cardRef= useRef(null);
    const imgRef= useRef(null);
    const numberRef= useRef(null);
    const titleRef= useRef(null);

    const onEnter= ()=>{
        onHoverStart?.();

        gsap.to(cardRef.current , {
            width: CARD_W * SCALE,
            height: CARD_H * SCALE,
            duration: 0.4,
            ease: "power3.out",
        })

        gsap.to(imgRef.current, {
            scale: 1,   
            duration: 0.42,
            ease: "power3.out",
        });

        numberRef.current?.play();
        titleRef.current?.play();

    }

    const onLeave= ()=>{
        onHoverEnd?.();

        gsap.to(cardRef.current , {
            width: CARD_W ,
            height: CARD_H ,
            duration: 0.17,
            ease: "power3.out",
        })

        gsap.to(imgRef.current, {
            scale: 1.6,
            duration: 0.19,
            ease: "power3.out",
        });

        numberRef.current?.reverse();
        titleRef.current?.reverse();

    };

    const {navitageTo}= useViewTransition();

    const handleClick= ()=>{
        navitageTo(`/project/${project.slug}`)
    }


  return (
    <div 
        ref={cardRef} 
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleClick}

        style={{
            width: CARD_W, 
            height: CARD_H, 
            flexShrink: 0, 
            overflow: "visible", 
            cursor: "pointer"
        }} 
        className="relative ">
            {/* Title panel */}

            <div 
                style={{bottom: 'calc(100% + 1rem)'}} 
                className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[0.4rem]">
                
                <TextReveal ref={numberRef} trigger="manual" splitBy="chars" duration= "0.55" >
                    <h3 
                        className="text-[1rem] text-[#010101]">
                        {project.number}
                    </h3>
                </TextReveal>

                <TextReveal ref={titleRef} trigger="manual" splitBy="words" duration="0.55" >
                    <h3 
                        className="text-[1rem] text-[#010101]">
                        {project.title}
                    </h3>
                </TextReveal>
                
            </div>


            {/* image */}

            <div className="imageDiv object-cover absolute h-full w-full overflow-hidden">
                <img ref={imgRef} src={project.coverImage} alt={project.title} style={{transformOrigin: 'center center', userSelect: 'none'}} className="h-full scale-[1.6] w-full object-cover "/>
            </div>

    </div>
  )
}

export default CarouselCard