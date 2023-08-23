import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl';

export default function CityDetails() {
  const { _id } = useParams();
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios(apiUrl + 'cities/city/:'+ _id)
      .then((res) =>{ setCity(res.data.response)
        console.log(city)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='rounded-full bg-white/50 bg-cover grow'>
      <h1 className='animate-pulse text-black text-[40px] flex justify-center items-center'>
        City under construction
      </h1>
      <div className='flex justify-center mt-4'>
        <Link to="/cities" className='px-4 py-2 bg-emerald-300 rounded-lg text-white'>
          Back to Cities
        </Link>
      </div>
      
      <div className='text-black mt-10 flex justify-center items-center tex-xl'>
        <h1>City Details {city.tex}</h1>
      </div>
      <div>
          <img className='rounded-md' src="{city.photo}" alt="{city.country}" />
      </div>
      <div>
        <p className='tex-black mt-8 ml-5'>{city.featuredlocation}</p>
        <p className='tex-black mt-8 ml-5'>{city.description}</p>
        <p className='tex-black mt-8 ml-5'>{city.smalldescription}</p>
      </div>
    </div>
  );
}

