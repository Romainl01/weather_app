import React from "react";

export default function Loader() {
  return (
    <div className="  mt-5 w-auto h-20 flex items-center justify-center">
      <button type="button" className=" bg-green-400 w-full h-full shadow-lg inline-flex items-center justify-center px-8 py-5 text-white rounded-lg text-xl font-bold cursor-default">
       <svg
          className= " h-full mr-5 w-full animate-spin"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
        ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        Loading
      </button>
    </div>
  );
}
