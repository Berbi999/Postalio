import supabase from "../../utilities/client";
import React, { useState, useEffect } from "react";
function CreatePost() {
  const [description, setDescription] = useState("");

  const handleCreatePost = async () => {
    try {
      const { data, error } = await supabase.from("Posts").upsert([
        {
          description,
        },
      ]);

      if (error) {
        console.error("Błąd podczas tworzenia postu:", error);
      } else {
        console.log("Pomyślnie utworzono post:", data);
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  };

  return (
    <div className=" basis-1/6  drop-shadow-xl rounded-3xl p-4 hover:border-2 hover:border-black/20 m-2">
      <p className="font-bold p-1">Create Post</p>
      <textarea
        placeholder="description"
        className=" h-20 border-2 border-black rounded-xl w-60 "
        type="text"
        maxLength="70"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <button
        className="border-2 border-black rounded-xl hover:bg-red-400/40 p-1 border-dashed hover:border-solid"
        onClick={handleCreatePost}
      >
        Add Post
      </button>
    </div>
  );
}

export default CreatePost;
