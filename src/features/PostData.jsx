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
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
const PostData = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const supabaseUrl = "https://tbxxyivkeefkzzwvsqkx.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieHh5aXZrZWVma3p6d3ZzcWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzYyMzcsImV4cCI6MjAxNDYxMjIzN30.BJT-pJjZrjKzowzsIFSOMTF2VhI7YLj7nsMRxV1W1G8";
    const supabase = createClient(supabaseUrl, supabaseKey);

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
            <p className="font-medium">{Posts.date}</p>
            <a className="font-bold hover:drop-shadow-md hover:border-2 hover:border-neutral-700 hover:border-opacity-10 w-auto">
              <Link to={`/${Posts.nickname}`}>{Posts.nickname}</Link>
            </a>
            <a className="font-normal"> {Posts.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostData;
