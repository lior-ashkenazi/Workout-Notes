import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-y-20 items-center mx-auto my-auto">
      <div className="flex flex-col gap-y-4 items-center">
        <h1 className="text-9xl drop-shadow-md text-neutral-400 font-bold tracking-tight">
          404
        </h1>
        <h2 className="text-6xl drop-shadow-md text-neutral-400 font-bold tracking-tight">
          Page Not Found
        </h2>
      </div>
      <div>
        <Link to="/">
          <button className="rounded-lg text-3xl capitalize bg-neutral-100 bg-opacity-90 tracking-tight text-neutral-700 px-4 py-4 border border-stone-400 shadow font-semibold outline-stone-700 transition-colors duration-300 transform hover:bg-stone-200 hover:text-stone-800 active:bg-neutral-300 active:text-neutral-900">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
