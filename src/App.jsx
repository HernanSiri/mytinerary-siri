import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='ml-10 mr-10 min-h-screen'>
      <header className='h-[90px] flex justify-center items-center font-sans font-bold'>
        <nav className='flex tex-lg w-[1291px]  justify-between'>
          <a href="#"className='text-2xl'>My Tinerary</a>
            <ul className='flex gap-5'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Citie</a></li>
              <li><a href="#" className='bg-[#4F46E5] p-2 rounded-lg text-white'>Login</a></li>
            </ul>
        </nav>
      </header>
      <main className='pt-20  flex flex-col justify-between '>
        <div className='flex flex-grow h-72 items-center'>
          <div className='w-[60%]'>
            <h1 className='text-3xl mb-8'>Find the perfect destination</h1>
            <p className='mb-8'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <a href="" className=' px-10 bg-[#4F46E5]  p-2 rounded-lg text-white'>View More</a>
          </div>
          <img className='w-[40%]'  src="" alt="" />
        </div>

      </main>
    </div>
  )
}

export default App
