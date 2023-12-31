import { useState, useEffect, useRef } from 'react';
//import axios from 'axios';
//import apiUrl from '../../apiUrl';
import CardCity from '../components/CardCity.jsx';
import CardError from '../components/CardError';
import { useSelector,useDispatch } from 'react-redux';
import city_actions from '../store/actions/cities.js';
import CardPolaroid from '../components/CardPolaroid.jsx';
const { read_cities } = city_actions

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  //const [cities, setCities] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);

  function handleFilter() {
    setReEffect(!reEffect);
  }

  return (
    <div className="container mx-auto p-4">
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          type="search"
          className="peer block min-h-[auto] w-full rounded border-0 bg-emerald-50 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="/city/:city_id"
          placeholder="Search cities..."
          ref={text}
          onKeyUp={handleFilter}
        />
        <label
          htmlFor="/city/:city_id"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Search
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {cities.length != 0 ?
        cities.map((each) => (
          <CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} _id={each._id} />
        )):
        <div><CardError/></div>
        }
      </div>
    </div>
  );
}

