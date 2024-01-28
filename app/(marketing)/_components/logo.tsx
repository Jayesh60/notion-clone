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
        src={'/logo.png'}
        height={40}
        width={40}
        alt="logo"
        className="dark:hidden"/>
        <Image 
        src={'/logo-dark.png'}
        height={40}
        width={40}
        alt="logo"
        className="dark:opacity-100  opacity-0"/>
        <p className={cn("font-semibold ", Font.className)}>Notion</p>
        
    </div>
  )
}

export default Logo