// import { useState, useEffect } from "react";
// import { supabase } from "./supabase";

// function UserData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Pobierz dane z bazy danych Supabase
//     async function fetchData() {
//       const { data, error } = await supabase.from("Users").select("nickname"); // Zastąp 'tabela' nazwą twojej tabeli w bazie danych

//       if (error) {
//         console.error("Błąd podczas pobierania danych:", error);
//       } else {
//         setData(data);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Dane z Supabase</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item.nickname}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserData;
