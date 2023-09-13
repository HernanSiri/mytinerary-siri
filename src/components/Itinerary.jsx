import React, { useState } from "react";
import ItinerariesDetail from "./ItinerariesDetail";
//import Activity from "./Activity";


export default function Itinerary({ name, price, duration, tags, photo, admin_id, admin_photo, _id }) {
  const [show, setShow] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <main >
      <div className="flex flex-col items-center justify-center mt-5 px-20">
        <div className="w-[750px] h-[850px] flex flex-grow flex-col items-center justify-start bg-emerald-50 rounded-lg shadow-lg mb-4">
          <p className="flex items-center justify-center mb-5 text-[28px] font-bold m-4">
            {name}
          </p>
          <div className="flex items-center justify-center">
            <img
              className="w-[650px] h-[500px] bg-emerald-100 shadow-lg rounded-lg"
              src={photo}
              alt="photo"
            />
          </div>
          <div className="flex w-[650px] h-[120px] mt-10 py-5 m-6 items-center justify-between ">
            <div className="flex flex-col items-center justify-start p-2.5 w-[100px]">
              <p className="flex text-md font-bold">User:</p>
              <img className="w-[90px] h-[80px] rounded-full flex p-2" src={admin_photo} alt="User" />
              <p className="flex text-center text-sm">{admin_id}</p>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[200px] h-[120px]">
              <p className="flex items-center justify-start text-md font-bold">Hashtags:</p>
              <div className="flex flex-col items-center justify-start text-center text-sm">
                {tags.map((tag, index) => (
                  <span key={index} className=" text-black border-2 px-2 py-1 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>


            <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
              <p className="flex items-center justify-start text-md font-bold">Duration:</p>
              <p className="flex items-center justify-start text-center text-sm">{duration}</p>
            </div>
            <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
              <p className="flex items-center justify-start text-md font-bold">Price:</p>
              <p className="flex items-center justify-start text-center text-sm">{"💶".repeat(price)}</p>
            </div>
          </div>
          <div className="flex w-[650px] h-[40px] mt-5 p-5 items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsLiked(!isLiked)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {show ? (
              <div
                onClick={() => setShow(!show)}
                className="hidden sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
            ) : (
              <div
                onClick={() => setShow(!show)}
                className="hidden sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* {show ? <Activity /> : <h1></h1>} */}
        {show && <ItinerariesDetail itinerary_id={_id} />}
      </div>
    </main>
  );
}
