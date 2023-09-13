import { useState } from "react";
import { Link as Anchor } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
const { signout } = user_actions

export default function NavBar() {

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  let mail = useSelector((store) => store.users.user?.mail);
  let name = useSelector(store=>store.users.user?.name)
  let photo = useSelector(store=>store.users.user?.photo)
  let dispatch = useDispatch();
  //console.log(name);

  return (
    <header className='h-24 flex justify-center items-center font-sans font-bold'>
    <nav className='p-3 flex tex-lg w-full md:w-[93%] justify-between items-center bg-emerald-50 rounded-lg shadow-lg '>
      <a href="#" className=''>
        <img src="/img/greenLogo.png" alt="My Tinerary" className='h-12' />
      </a> 
      {mail && (
      <div
  
  className="drop-shadow-lg border border-[#D6FAE4] -word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] bg-[#E4E6E9] dark:text-neutral-200">
  <img
    className="drop-shadow-lg my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
    src={photo}
    alt="User login" />
    𝐻𝑒𝑙𝑙𝑜! {name}
  
  <span
    onClick={() => dispatch(signout())}
    
    className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-3 w-3">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  </span> 
  
</div>
)}
      
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
          <Anchor to="/" href="#">Ⲏⲟⲙⲉ</Anchor>
        </li>
        <li>
          <Anchor to="cities" href="#" className="animate-pulse">Cɪᴛɪᴇs</Anchor>
        </li>
        <li>
        {mail && (
          <Anchor to="/profile" href="#" className="">Profile</Anchor>
        )}
        </li>
        <li>
        {mail ? (
          <button className='animate-pulse flex items-center bg-emerald-400 p-2 rounded-lg text-white drop-shadow-lg' onClick={() => dispatch(signout())}>
            𝐋𝐨𝐠 𝐎𝐮𝐭
          </button>
          ) : (
          <Anchor to="/auth/signin"
            href="#"
            className='flex items-center bg-emerald-300 p-2 rounded-lg text-white drop-shadow-lg'
          >
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white"/>
            <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white"/>
            </svg>
            𝐋𝐨𝐠𝐢𝐧
          </Anchor>
          )}
        </li>
      </ul>
    </nav>
  </header>
  )
}



