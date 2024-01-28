import Logo from "./logo"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 dark:bg-[#1f1f1f] bg-background z-50">
        <Logo/>
        <div className="md:ml-auto w-full flex justify-end max-md:justify-between gap-2 items-center">
          <Button variant={'ghost'} size={'sm'}>
            Privacy Policy
          </Button>
          <Button variant={'ghost'} size={'sm'}>
            Terms & Conditions
          </Button>
        </div>
    </div>
  )
}

export default Footer