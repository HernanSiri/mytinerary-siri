import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import city_actions from '../store/actions/cities';
import { useDispatch, useSelector } from 'react-redux';
import itinerary_actions from '../store/actions/itineraries';
const { read_city } = city_actions;
const { read_itineraries_from_city } = itinerary_actions;
import Itinerary from '../components/Itinerary';
import NotFoundItinerary from '../components/NotFoundItinerary';

export default function CityDetails({ src, alt, text, id }) {
  const { city_id } = useParams()
  const dispatch = useDispatch();
  const city = useSelector(store => store.cities.city)
  const itinerary = useSelector(store => store.itineraries.itineraries_from_city)
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(read_city({ id: city_id }))
    dispatch(read_itineraries_from_city({ id: city_id }))
    console.log(itinerary)
  }, []);

  return (
    <div className='rounded-lg bg-white/70 bg-cover grow p-6'>
      <h1 className='animate-pulse text-4xl text-black text-center'>
        City under construction
      </h1>

      <div className='text-black mt-10 text-4xl text-center font-bold'>
        <h1>{city.city}</h1>
      </div>
      <div className='mt-6'>
        <img className='rounded-md w-full' src={city.photo} alt={city.country} />
      </div>
      <div className='mt-6'>
        <p className='text-black mt-4'>{city.featuredlocation}</p>
        <p className='text-black mt-4'>{city.description}</p>
        <p className='text-black mt-4'>{city.smalldescription}</p>
      </div>
      <div className='flex justify-center mt-6'>
        <Link to="/cities" className='shadow-lg px-4 py-2 bg-emerald-300 rounded-lg text-white'>
          Back to Cities
        </Link>
        <div className="flex items-end justify-center pl-10">
          <div onClick={() => setShow(!show)} className='shadow-lg px-4 py-2 bg-emerald-300 rounded-lg text-white cursor-pointer'>
            {show ? ('Close ▲') : ('View Itineraries ▼')}
          </div>
        </div>
      </div>

      <div>
  {show && (itinerary.length !== 0 ? (
    itinerary.map(suegra => (
      <Itinerary
        admin_id={suegra.city_id.admin_id.name}
        admin_photo= {suegra.city_id.admin_id.photo}
        key={suegra._id}
        name={suegra.name}
        price={suegra.price}
        duration={suegra.duration}
        tags={suegra.tags}
        photo={suegra.photo}
      />
    ))
  ) : (
    <NotFoundItinerary />
  ))}
</div>


    </div>
  );
}
