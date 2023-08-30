import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, _id }) {
  return (
    <div className="mx-3 mt-6 self-start rounded-lg bg-emerald-50 shadow-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <Anchor to={"/city/"+_id}>
        <img className="w-full h-44 rounded-t-lg object-cover" src={src} alt={alt} />
      </Anchor>
      <div className="p-6 text-center">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {text}
        </h5>
      </div>
    </div>
  );
}

  
  