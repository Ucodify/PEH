import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Lawyers() {
  const [lawyer, setLawyer] = useState([]);
  useEffect(() => {
    const getLawyer = async () => {
      try {
        // const res = await axios.get("http://localhost:4001/lawyer");
        //console.log(res.data);
        //setLawyer(res.data);
        const res = await fetch(
          "http://localhost:4001/lawyer"
          // {
          //     method: 'GET',
          //     headers: {
          //         'Content-Type': 'application/json'
          //     },
          //     body: JSON.stringify({ message })
          // }
        );
        console.log(res.data);
        setLawyer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLawyer();
  }, []);
  return (
    <>
      <div className="">
        <div
          className="max-w-screen-2xl container mx-auto md:px-0 px-4 dark:bg-slate-900 dark:text-white pt-28 item-center justify-center text-center dark:bg-slate-900 text-white pb-10 md:px-20"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundAttachment: "fixed",
            position: "relative",
            top: "30px",
            overflow: "hidden",
            backgroundSize: "cover",
            mozbackgroundSize: "cover",
            WebkitBackgroundSize: "cover",
            zIndex: "10",
          }}
        >
          <h1 className="text-2xl font-semibold md:text-4xl">
            Connect with Top{" "}
            <span className="text-error">Property Lawyers</span>
          </h1>
          <p className="mt-7">
            Each lawyer in our network has been thoroughly reviewed for their
            expertise and commitment to client success. Browse through the
            profiles to find the right lawyer for your specific requirements and
            connect with them directly to get started.{" "}
          </p>
          <Link to="/">
            <button className="bg-error text-white px-4 py-2 rounded-md hover:bg-red-700 duration-200 mt-10">
              Back
            </button>
          </Link>
        </div>
        <div className="md:ms-10 ms-5 mt-12 grid grid-cols-1 md:grid-cols-3">
          {lawyer.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lawyers;
