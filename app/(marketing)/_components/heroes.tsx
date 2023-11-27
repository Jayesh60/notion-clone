import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] sm:h-[350px] sm:w-[350px] ">
                <Image 
                src={"/documents.png"}
                fill 
                alt="hero"
                className="object-contain"
                />
            </div>
            <div className="relative max-md:hidden md:block h-[400px] w-[400px] ">
                <Image 
                src={"/reading.png"}
                fill 
                alt="hero"
                className="object-contain"
                />
            </div>
        </div>
    </div>
  )
}

export default Heroes;