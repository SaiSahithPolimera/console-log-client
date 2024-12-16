import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center flex-col gap-4 font-mono'>
        <p className='text-white text-3xl'>Looks like you lost your way 😶</p>
        <button className='bg-gradient-to-br from-green-400 to-black p-3 text-white rounded-lg'>
        <Link className='text-3xl border-none focus:outline-none' to="/"> Go home </Link>
        </button>
    </div>
  )
}

export default ErrorPage