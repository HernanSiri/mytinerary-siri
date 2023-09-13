export default function Users({ user, show, setShow }) {
    return (
      <div className="w-[360px] h-[800px] flex flex-col justify-center items-center bg-tertiary rounded-xl sm:bg-white p-[20px] mt-[20px] md:mt-0">
      <img className="my-2 p-2 rounded-full  bg-gradient-to-r from-green-400 to-emerald-50  w-[150px] h-[150px] object-cover" src={user.photo} />
        <p className="my-2 text-center">{user.name}</p>
        <p className="my-2 text-center">{user.lastName}</p>
        <p className="my-2 text-center">{user.country}</p>
        
        {show ? (
          <input
            type="button"
            className= "w-full shadow bg-emerald-300 hover:bg-emerald-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"

            value="Hide!"
            onClick={() => setShow(!show)}
          />
        ) : (
          <input
            type="button"
            className="w-full shadow bg-emerald-300 hover:bg-emerald-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Update!"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    );
  }