import React from "react";

function Services() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 md:py-10 py-10 px-4 my-20 text-white text-center items-center justify-center"
        style={{
          backgroundImage: "url(/bg.jpg)",
          width: "100%",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          position: "relative",
          top: "30px",
          overflow: "hidden",
          backgroundSize: "cover",
          mozbackgroundSize: "cover",
          WebkitBackgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold mt-10 mb-5">We deal with...</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-1">
          <div>
            {" "}
            <div className="md:ms-36">Real Estate Disputes</div>
            <img
              src="/realestatedisputes.jpg"
              width={300}
              className="md:ms-52 ms-10 hover:md:ms-0 hover:duration-200"
            />
          </div>
          <div>
            {" "}
            <div className="md:me-44  md:text-center ">
              Procurement and Sale of Real Properties
            </div>
            <img
              src="/procurement.jpg"
              width={300}
              className="md:ms-16 hover:md:ms-0 ms-10 hover:duration-200"
            />
          </div>
          <div>
            {" "}
            <div className="md:ms-32">Landlord and Tenant Disputes</div>
            <img
              src="/tenanland.jpg"
              width={300}
              className="md:ms-52 hover:md:ms-0 ms-10 hover:duration-200"
            />
          </div>
          <div>
            {" "}
            <div className="md:me-48 md:text-center">Property Conveyancing</div>
            <img
              src="/pic4.jpg"
              width={300}
              className="md:ms-16 hover:md:ms-0 ms-10 hover:duration-200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
