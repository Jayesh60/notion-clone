import Image from "next/image"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const Font = Poppins({
    subsets:["latin"],
    weight:["400", "600"]
});

const Logo = () => {
  return (
    <div className="max-md:hidden md:flex items-center gap-x-2 ">
        <Image 
        src={'/logo.svg'}
        height={40}
        width={40}
        alt="logo"/>
        <p className={cn("font-semibold ", Font.className)}>Notion</p>
        
    </div>
  )
}

export default Logo