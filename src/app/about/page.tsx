import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <div className='h-screen w-[100%] bg-green-300'>
        <h1 className='text-center font-medium text-2xl'>This is About Page</h1>
        <p className=' text-center font-medium text-xl '><Link href="./home">Go to Home Page</Link></p>
      </div>
    </div>
  )
}

export default About
