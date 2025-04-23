import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center flex-col gap-4 font-sans'>
        <p className='text-white md:text-3xl'>Looks like you lost your way 😶</p>
        <button className='bg-gradient-to-br from-green-400 to-black md:p-3 p-1 text-white rounded-lg'>
        <Link className='md:text-3xl border-none focus:outline-none' to="/"> Go home </Link>
        </button>
    </div>
  )
}

export default ErrorPage