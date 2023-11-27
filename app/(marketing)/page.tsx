import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";

export default function MarketingPage() {
  return (
   <div className="min-h-full flex flex-col">
    <div className="flex justify-center md:justify-start text-center flex-col gap-y-8 items-center px-6 pb-10 ">
      <Heading/>
      <Heroes/>
    </div>
    <Footer/>
   </div>
  )
}
