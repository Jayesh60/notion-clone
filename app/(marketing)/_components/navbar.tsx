'use client';
import { useScrollTop } from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const scrolled = useScrollTop();
  return (
    <div className={`z-50 dark:bg-[#1f1f1f] bg-background fixed top-0 p-6 w-full flex items-center ${scrolled && 'border-b shadow-sm'} h-[10vh]`}>
      <Logo />
      <div className="md:ml-auto md:justify-end gap-6 flex items-center">

        {isLoading && (
          <p> Loading...</p>
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size={"sm"}>
                Log In
              </Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"}>
              <Link href={'/'}>Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar