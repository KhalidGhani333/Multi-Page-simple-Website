import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='w-[100%] h-screen bg-blue-200 '>
      <h1 className='text-center text-2xl font-medium'> This is Contact Page </h1>
      <p className='text-center text-xl font-medium '><Link href="/">Go To Home Page</Link></p>

      </div>
    </div>
  )
}

export default Contact