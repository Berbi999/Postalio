import MenuList from "../components/MenuList";
import NavBar from "../components/NavBar";
import PostData from "../features/PostData";
import UserProfile from "./ProfilePages";
import CreatePost from "./forms/CreatePostForm";
import React from "react";
function HomePage() {
  return (
    <div>
      <div className="flex flex-row">
        <NavBar></NavBar>
        <CreatePost></CreatePost>
        <MenuList></MenuList>
      </div>
      <div className="flex flex-col">
        <div className="border-2 border-opacity-10 border-slate-800 m-12 p-2 drop-shadow-md bg-gray-800/60  rounded-3xl">
          <div className="rounded-3xl bg-gray-700 p-2 m-1 flex flex-col">
            <PostData></PostData>
            <a
              href="/"
              className=" font-bold w-20 rounded-full self-center text-center drop-shadow-md border-2 border-black/20 border-opacity-40"
            >
              Go to up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
