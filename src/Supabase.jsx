import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SupabaseDemo = () => {
  const supabaseUrl = "YOUR_SUPABASE_URL"; // Zastąp YOUR_SUPABASE_URL adresem URL twojej bazy danych Supabase
  const supabaseKey = "YOUR_SUPABASE_API_KEY"; // Zastąp YOUR_SUPABASE_API_KEY kluczem API twojej bazy danych Supabase

  const supabase = createClient(supabaseUrl, supabaseKey);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Pobieranie danych z bazy danych
    async function fetchData() {
      const { data, error } = await supabase.from("your_table_name").select("*");
      if (error) {
        console.error("Błąd pobierania danych:", error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dane z Supabase</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.column_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SupabaseDemo;