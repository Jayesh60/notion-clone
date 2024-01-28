import Navbar from "./_components/navbar"

const MArkLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
        <Navbar/>
        <main className="pt-40">
            {children}
        </main>
    </div>
  )
}

export default MArkLayout