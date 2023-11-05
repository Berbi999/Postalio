import React, { useState } from "react";
import supabase from "../utilities/client";

function FilterPosts() {
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
    <div>
      <input
        type="text"
        placeholder="Wyszukaj posty"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Filtruj</button>

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterPosts;
