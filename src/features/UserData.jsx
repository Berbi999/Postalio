import { useState, useEffect } from "react";
import supabase from "../utilities/client";

function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("Users").select("nickname");

      if (error) {
        console.error("Błąd podczas pobierania danych:", error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.nickname}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
