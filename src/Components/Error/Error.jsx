import React from "react";
import PropTypes from "prop-types";

export default function Error({ message }) {
  return (
    <div className="  mt-5 w-auto h-20 flex items-center justify-center">
      <button
        type="button"
        className=" bg-red-400 w-full h-full shadow-lg inline-flex items-center justify-center px-8 py-5 text-white rounded-lg text-xl font-bold cursor-default"
      >
 <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-auto mr-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>
        {message}
      </button>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "An error occured...",
};
