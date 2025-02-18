import DetailsPage from "../components/Profile.jsx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";
import LiveChat from "../components/LiveChat.jsx";

function ProfileDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        ////const res = await axios.get("http://localhost:4001/details/:id");
        // console.log(res.data);
        // const data = res.data.filter((data) => data.id === id);
        // console.log(data);
        ////setDetails(res.data);
        ///////
        const res = await fetch(
          "http://localhost:4001/details/:id"
          // {
          //     method: 'GET',
          //     headers: {
          //         'Content-Type': 'application/json'
          //     },
          //     body: JSON.stringify({ message })
          // }
        );
        console.log(res.data);
        // const data = await res.data
        // .json()
        // .filter((data) => data.category === "Free");
        //console.log(data);
        setDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  return (
    <>
      <LiveChat />
      <div>
        {attorney.map((item) => (
          <DetailsPage item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ProfileDetails;
