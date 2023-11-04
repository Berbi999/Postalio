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
import axios from "axios";

const PostData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://tbxxyivkeefkzzwvsqkx.supabase.co"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania danych: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="drop-shadow-md p-4 m-4 rounded-3xl">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong className="font-bold hover:drop-shadow-md hover:border-2 hover:border-neutral-700 hover:border-opacity-10">
              {post.nickname}
            </strong>
            <p className="font-normal">{post.description}</p>
            <p className="font-medium">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostData;
