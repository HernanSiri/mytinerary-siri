import { useState,useEffect } from "react"
import Arrow from "../components/Arrow"
import axios from "axios"
import Carousel from "../components/Carousel"

export default function Home() {
    
    const [show,setShow] = useState(true)
    const [data,setData] = useState([])
   
      useEffect(
        ()=>{
          axios('/data.json')
           .then(res=>setData(res.data))
           .catch(err=>console.log(err))
        },
        []
        )
    return (
        <main className='ml-10 mr-10 md:pt-44 mx-auto flex flex-col md:flex-row drop-shadow-lg'>
            <div className='md:w-1/2'>
                <h1 className='text-4xl mb-8'>Find the perfect destination</h1>
                <p className='mb-8'>
                 Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                </p>
                <a href="#" className='px-6 py-2 bg-[#4F46E5] shadow-lg p-2 rounded-lg text-white drop-shadow-lg'>
                 View More
                </a>
            </div>
            <Carousel data={data} />
        </main>
    )
}
