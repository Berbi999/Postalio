import { useEffect, useState } from "react";
import supabase from "../utilities/client";

function UserProfile(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", props.match.params.username);

      if (data && data.length > 0) {
        setUserData(data[0]);
      }
    };

    fetchUserData();
  }, [props.match.params.username]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.username}'s Profile</h1>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
export default UserProfile;
