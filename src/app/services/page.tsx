import React from 'react'
import Link from 'next/link'
const Services = () => {
  return (
    <div>
      <div className='w-[100%] h-screen bg-red-300'>
        <h1 className='text-center text-2xl font-medium' >This is Services Page</h1>
        <p className='text-center text-xl font-medium'><Link href="./home">Go To Home Page</Link></p>
      </div>
    </div>
  )
}

export default Services
