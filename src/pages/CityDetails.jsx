import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function CityDetails() {
  const { city_id } = useParams();

  // export default function Cities() {
  //   const [cities, setCities] = useState([]);
  //   const [reEffect, setReEffect] = useState(true);
  //   const text = useRef();
  
  //   useEffect(() => {
  //     axios(apiUrl + 'cities?city=' + text.current.value)
  //       .then((res) => setCities(res.data.response))
  //       .catch((err) => console.log(err));
  //   }, [reEffect]);

  return (
    <div className='rounded-full bg-white/50 bg-cover grow'>
      <h1 className='animate-pulse text-black text-[40px] flex justify-center items-center'>
        City under construction
      </h1>
      {/* Botón para volver a la página de Cities */}
      <div className='flex justify-center mt-4'>
        <Link to="/cities" className='px-4 py-2 bg-emerald-300 rounded-lg text-white'>
          Back to Cities
        </Link>
      </div>
      <p>City ID: {city_id}</p>
    </div>
  );
}
