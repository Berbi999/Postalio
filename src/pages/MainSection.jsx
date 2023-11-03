import { Link } from "react-router-dom";
import React from "react";
export default function MainSection() {
  const posts = [
    {
      Id: 1,
      description: "skacowana",
      user: { Id: 1, name: "szeslaw" },
      creationDate: new Date(),
    },
    {
      Id: 2,
      description: "wysuszona",
      user: { Id: 2, name: "ttt" },
      creationDate: new Date(),
    },
  ];

  // function fDate(date){
  //     return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()} ${date.getHours()};`
  // }

  const listPost = posts.map((post) => (
    <div className="drop-shadow-md p-4 m-4">
      <p className="font-medium">{post.creationDate.toDateString()}</p>
      <p className="font-bold">
        <Link to="">
          <a className="hover:drop-shadow-md hover:border-2 hover:border-neutral-700 hover:border-opacity-10">
            {post.user.name}
          </a>
        </Link>
        <a className="font-normal"> {post.description}</a>
      </p>
    </div>
  ));
  return (
    <div className="border-2 border-opacity-10 border-slate-800 border-spacing-2 m-12 p-2 flex flex-col space-y-4 drop-shadow-md">
      {listPost}
    </div>
  );
}
