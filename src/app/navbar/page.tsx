
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-20'>
        <div className='flex w-[100%] mx-auto h-20 bg-yellow-400 justify-between align-middle items-center'>
        <div className='font-bold text-2xl ml-2 sm:ml-10'>My-Website</div>
        <div className='mr-2 sm:mr-20  flex gap-2 sm:gap-6  font-medium'>
        <Link href="/">Home</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">Contact</Link>
        <Link href="./services">Services</Link>

        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
