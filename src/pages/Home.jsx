import MenuList from "../components/MenuList";
import NavBar from "../components/NavBar";
import PostData from "../features/PostData";
import CreatePost from "./forms/CreatePostForm";
import { createClient } from "@supabase/supabase-js";
import React, { useState, useEffect } from "react";
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
          <div className="rounded-3xl bg-gray-700 p-2 m-1">
            <PostData>{}</PostData>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
