import { useState } from "react";

export default function NavBar() {

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header className='h-24 flex justify-center items-center font-sans font-bold'>
    <nav className='flex tex-lg w-full md:w-[93%] justify-between items-center bg-emerald-50 rounded-lg shadow-lg'>
      <a href="#" className='text-2xl'>
        My Tinerary
      </a>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleLinks} className='text-xl px-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </button>
      </div>
      <ul
        className={`items-center md:flex gap-2 ${
          showLinks ? 'flex' : 'hidden'
        } md:w-auto`}
      >
        <li >
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Cities</a>
        </li>
        <li>
          <a
            href="#"
            className='flex items-center bg-[#4F46E5] p-2 rounded-lg text-white drop-shadow-lg'
          >
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white"/>
            <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white"/>
            </svg>
            Login
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}



