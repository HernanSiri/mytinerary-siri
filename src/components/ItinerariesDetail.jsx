import Activities from './Activities'

export default function ItinerariesDetail({ itinerary_id }) {
   
    //console.log(itinerary_id)


    return (
     
        <div className="w-[700px] h-[600px] flex flex-col items-center">
  <div>
    <h1 className="text-xs text-center mb-3 mt-3 md:text-sm lg:text-lg xl:text-xl text-emerald-500">𝗔𝗰𝘁𝗶𝘃𝗶𝘁𝗶𝗲𝘀:</h1>
    <Activities itinerary_id={itinerary_id} />
  </div>
  <div>
    
  </div>
  <h2 className="text-xs text-center mb-3 mt-3 md:text-sm lg:text-lg xl:text-xl text-emerald-500">𝗖𝗼𝗺𝗺𝗲𝗻𝘁𝘀:</h2>
  <div id="comment-box" className="search container">
    <div className="relative w-10 h-10 mb-2 overflow-hidden bg-emerald-100 rounded-full ring-2 ring-emerald-100 dark:ring-emerald-100">
      <svg className="absolute w-12 h-12 text-emerald-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      </svg>
    </div>
    <form action="#" method="post">
      <textarea className="comment rounded-lg" name="comment" placeholder="Leave your comment..." />
      <button type="submit" className="flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-emerald-300 shadow-lg rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
        𝗣𝗼𝘀𝘁 𝗰𝗼𝗺𝗺𝗲𝗻𝘁𝗮𝗿
      </button>
    </form>
  </div>
</div>

        

    )
}