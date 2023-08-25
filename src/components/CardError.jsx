import React from 'react';

export default function CardError() {
  return (
    <div className=' h-screen'>
      <div className=' rounded-full bg-white/50 bg-cover grow p-2'>
        <h1 className='animate-pulse text-4xl text-black text-center flex justify-center items-center'>
          Sorry, please refine your search
        </h1>
      </div>
    </div>
  );
}
