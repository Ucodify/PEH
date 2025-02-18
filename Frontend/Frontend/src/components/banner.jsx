import React, { useState } from "react";
import background7 from "/background7.jpg";
import SendEmail from "./SendEmail.jsx";
function Banner() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 pt-12"
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
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-6 text-white">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to <br />
              <span className="text-red-00">Property Expertise Hub!!!</span>
            </h1>
            <p className="text-xl">
              Our platform connects you with experienced professionals
              specialized in various aspects of property law, from transactions
              and disputes to land use and development. Join us today and
              discover a community dedicated to your property success.
            </p>
            <label className="input input-bordered flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black hover:shadow-lg hover:bg-opacity-20">
              <SendEmail />
            </label>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src={background7}
            className="md:ms-36 md:mt-10 md:mb-20 md:w-98 mt-10 w-96 h-96 rounded-md mx-auto hover:scale-110 transform duration-1000 ease-in-out"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
