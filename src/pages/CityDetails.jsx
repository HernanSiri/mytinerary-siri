import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import city_actions from '../store/actions/cities';
import { useDispatch, useSelector } from 'react-redux';
const { read_city } = city_actions;

export default function CityDetails({src, alt, text, id }) {
  const { city_id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_city({ id:city_id }))
    
  }, []);

  const city = useSelector(store=>store.cities.city)
  console.log(city);

  return (
    <div className='rounded-lg bg-white/70 bg-cover grow p-6'>
    <h1 className='animate-pulse text-4xl text-black text-center'>
      City under construction
    </h1>

    <div className='text-black mt-10 text-2xl text-center'>
      <h1>City Details: {city.city}</h1>
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
      <Link to="/cities" className='px-4 py-2 bg-emerald-300 rounded-lg text-white'>
        Back to Cities
      </Link>
    </div>
  </div>
  );
}

