import NavBar from "../components/NavBar"


export default function Layout({children}) {    
    return (
      <div className='mx-auto px-4 md:px-10 min-h-screen w-full'> 
  
        <NavBar />
        {children}
        
      </div>
    )
  }
  