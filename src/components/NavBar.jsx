import React from "react";
import { useState } from "react";
import supabase from "../utilities/client";
export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const handleSearch = async () => {
    try {
      const { data, error } = await supabase
        .from("Posts")
        .select("*")
        .textSearch("description", searchQuery);

      if (error) {
        console.error("Błąd podczas filtrowania postów: ", error);
      } else {
        setFilteredPosts(data);
      }
    } catch (error) {
      console.error("Wystąpił błąd: ", error);
    }
  };

  return (
    <div className="m-2 basis-1/2">
      <div className="bg-gray-700 p-2 drop-shadow-xl border-slate-800 border-2 border-opacity-60 w-auto h-13 rounded-full">
        <form className="bg-gray-700 flex justify-between">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            size="42"
            maxLength="70"
            className="m-2 rounded-xl border-gray-700 border-2 border-opacity-40 bg-zinc-300 basis-5/6"
          />
          <button
            onClick={handleSearch}
            className=" order-last rounded-full bg-zinc-300 border-2 border-gray-700 border-opacity-40 p-1 hover:bg-indigo-300 hover:border-opacity-100 hover:font-medium "
          >
            Browse
          </button>
        </form>
      </div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.description}</li>
        ))}
      </ul>
    </div>
  );
}
