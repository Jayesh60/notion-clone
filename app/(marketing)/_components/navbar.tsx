'use client';
import { useScrollTop } from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {

    const scrolled = useScrollTop();
  return (
    <div className={`z-50 dark:bg-[#1f1f1f] bg-background fixed top-0 p-6 w-full flex items-center ${scrolled && 'border-b shadow-sm'} `}>
        <Logo/>
        <div className="md:ml-auto md:justify-end flex items-center">
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar