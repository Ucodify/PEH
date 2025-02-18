import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import axios from "axios";
import Cards from "./Cards.jsx";

function Freelawyer() {
  const [lawyer, setLawyer] = useState([]);

  useEffect(() => {
    const getLawyer = async () => {
      try {
        // const res = await axios.get("http://localhost:4001/lawyer");
        // console.log(res.data);
        // const data = res.data.filter((data) => data.category === "Free");
        // console.log(data);
        // setLawyer(data);
        /////
        const res = await fetch(
          "http://localhost:4001/lawyer"
          // , {
          //   method: "GET",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // }
        );
        //console.log(res.data);
        const data = await res.json();
        //const data = res.datal.filter((datal) => datal.category === "Free");
        console.log(data);
        setLawyer(data);
        if (data.error) throw new Error(data.error);
      } catch (error) {
        console.log(error);
      }
    };
    getLawyer();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-bold font-bold bold dark:text-white">
        <div className="text-black">
          <h1 className="font-bold text-4xl pb-2 text-center md:mt-20 ">
            Lawyers from non-profit organizations
          </h1>
          <p>
            Pro bono lawyers offer their services voluntarily and without
            payment to individuals or organizations that cannot afford to hire
            legal representation.{" "}
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {lawyer.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freelawyer;
