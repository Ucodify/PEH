import React from "react";

export default function About() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-60 pt-12 text-center items-center justify-center dark:text-white"
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
        <h1 className="text-4xl font-bold mt-40 ">About</h1>
      </div>
      <h1 className="mx-auto px-5 py-10 my-10 text-center items-center justify-center">
        About us
      </h1>
      <p className="mx-20">
        Qualified Lawyers and Consultants Rely on our qualified lawyers and
        consultants for expert legal guidance and support. Over 18 Years of
        Experience Benefit from 18 years of experience in legal practice for
        trusted and expert advice. Distinguished Legal Team Meet our
        distinguished legal team for exceptional legal expertise and dedicated
        support.
      </p>
    </>
  );
}
