// import React from "react";
// import { Link } from "react-router-dom";
// function PostData() {
//   const posts = [
//     {
//       Id: 1,
//       description: "skacowana",
//       user: { Id: 1, name: "szeslaw" },
//       creationDate: new Date(),
//     },
//     {
//       Id: 2,
//       description: "wysuszona",
//       user: { Id: 2, name: "ttt" },
//       creationDate: new Date(),
//     },
//   ];
//   const listPost = posts.map((post) => (
//     <div className="drop-shadow-md p-4 m-4 rounded-3xl">
//       <p className="font-medium">{post.creationDate.toDateString()}</p>
//       <p className="font-bold">
//         <Link to="">
//           <a className="hover:drop-shadow-md hover:border-2 hover:border-neutral-700 hover:border-opacity-10">
//             {post.user.name}
//           </a>
//         </Link>
//         <a className="font-normal"> {post.description}</a>
//       </p>
//     </div>
//   ));
//   return <div className=" rounded-3xl">{listPost}</div>;
// }
// export default PostData;

import React, { useState, useEffect } from "react";
import supabase from "../utilities/client";
import { Link } from "react-router-dom";
import UserProfile from "../pages/ProfilePages";
const PostData = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from("Posts").select("*");
        if (error) {
          console.error("Błąd podczas pobierania danych: ", error);
        } else {
          setPosts(data);
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych: ", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="drop-shadow-md p-4 m-4 rounded-3xl flex flex-col">
      <ul className="divide-y-2 divide-black/20  space-y-10">
        {Posts.map((Posts) => (
          <li key={Posts.id}>
            <p className=" font-bold">{new Date(Posts.date).toDateString()}</p>
            <button
              // onClick={UserProfile()}
              className="font-extrabold hover:drop-shadow-md hover:border-2 hover:border-neutral-700 hover:border-opacity-10 w-auto"
            >
              <Link to={`/${Posts.nickname}`}>{Posts.nickname}</Link>
            </button>
            <a className="font-normal"> {Posts.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostData;
