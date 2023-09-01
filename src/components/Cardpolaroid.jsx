import { Link as Anchor } from "react-router-dom";

export default function CardPolaroid({ src , alt , text , _id }) {
  
  return (
    <div className='max-w-xs transition duration-300 ease-in-out hover:scale-110 flex flex-col items-center p-4 m-2 bg-emerald-50 rounded-lg shadow-lg  '>
 <Anchor to={"/city/"+_id}>
  <img
    className='h-40 w-40 rounded-full object-cover object-center '
    src={src}
    alt={alt}
  />
  </Anchor>
  <p className="mt-2 text-lg font-semibold">{text}</p>
</div>

  )
}


