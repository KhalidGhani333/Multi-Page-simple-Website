
import React from 'react'
import Navbar from '../navbar/page'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-screen w-[100%] bg-slate-900 text-white'>
        <h1 className='text-2xl text-center font-medium'>Welcome to My Website</h1>
        <p className='text-center text-xl font-medium'>This is Home Page</p>

      </div>
    </div>
  )
}

export default Home