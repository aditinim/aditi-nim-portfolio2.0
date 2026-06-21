import TextReveal from "./TextReveal";



const Navbar = () => {
  return (
    <div className="fixed z-[30] px-[3rem] top-0 left-0 h-[5vh] w-full  flex items-center justify-between">
        <div className="leftNameSide ">
            <TextReveal>
                <h3 className="text-[1rem]">Aditi Nim</h3>
            </TextReveal>
        </div>
        <div className="rightLinkSide flex gap-[1rem]">
            <TextReveal>
                <h3 className="text-[0.8rem]">Home</h3>
            </TextReveal>

            <TextReveal>
                <h3 className="text-[0.8rem]">About</h3>
            </TextReveal>

            <TextReveal>
                <h3 className="text-[0.8rem]">Contact</h3>
            </TextReveal>
        </div>

    </div>
  )
}

export default Navbar