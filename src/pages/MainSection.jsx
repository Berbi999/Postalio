import React from "react";
import Posts from "../features/Posts";
export default function MainSection() {
  // function fDate(date){
  //     return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()} ${date.getHours()};`
  // }
  return (
    <div className="border-2 border-opacity-10 border-slate-800 border-spacing-2 m-12 p-2 flex flex-col space-y-4 drop-shadow-md bg-gray-800/60  rounded-3xl">
      <Posts />
    </div>
  );
}
