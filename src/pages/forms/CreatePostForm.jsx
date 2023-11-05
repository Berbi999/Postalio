import React, { useState } from "react";
import supabase from "../../utilities/client";
import PostData from "../../features/PostData";
function CreatePost() {
  const [description, setDescription] = useState("");

  const handleCreatePost = async () => {
    try {
      // Dodaj post do tabeli Posts w bazie danych Supabase
      const { data, error } = await supabase.from("Posts").upsert([
        {
          description,
        },
      ]);

      if (error) {
        console.error("Błąd podczas tworzenia postu:", error);
      } else {
        console.log("Pomyślnie utworzono post:", data);
        PostData();
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  };

  return (
    <div className=" basis-1/6  drop-shadow-xl rounded-3xl p-4 hover:border-2 hover:border-black/20 hover:m-2">
      <p className="font-bold p-1">Create Post</p>
      <textarea
        placeholder="description"
        className=" h-20 border-2 border-black rounded-md w-60"
        type="text"
        maxLength="70"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <button
        className="border-2 border-black rounded-md hover:bg-red-400/40"
        onClick={handleCreatePost}
      >
        Add Post
      </button>
    </div>
  );
}

export default CreatePost;
