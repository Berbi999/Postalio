import React from "react";
export default function NavBar() {
  return (
    <div className="flex flex-row m-2">
      <div className="p-2 drop-shadow-xl border-slate-800 border-2 border-opacity-60 w-auto h-13 rounded-full">
        <form className="">
          <input
            type="text"
            placeholder="Search"
            size="42"
            maxLength="38"
            className="m-2"
          />
          <button
            class="rounded-full border-2 border-gray-700 border-opacity-40 p-1 hover:bg-indigo-300 hover:border-opacity-100 hover:font-medium "
            type="submit"
          >
            Browse
          </button>
        </form>
      </div>
    </div>
  );
}
