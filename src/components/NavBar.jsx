import React from "react";
export default function NavBar() {
  return (
    <div className="flex flex-row m-2">
      <div className="bg-gray-700 p-2 drop-shadow-xl border-slate-800 border-2 border-opacity-60 w-auto h-13 rounded-full">
        <form className="bg-gray-700">
          <input
            type="text"
            placeholder="Search"
            size="42"
            maxLength="38"
            className="m-2 rounded-xl border-gray-700 border-2 border-opacity-40 bg-zinc-300"
          />
          <button
            class="rounded-full bg-zinc-300 border-2 border-gray-700 border-opacity-40 p-1 hover:bg-indigo-300 hover:border-opacity-100 hover:font-medium "
            type="submit"
          >
            Browse
          </button>
        </form>
      </div>
    </div>
  );
}
