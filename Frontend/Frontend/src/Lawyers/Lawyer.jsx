import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Lawyers from "../components/Lawyers";

function Lawyer() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Lawyers />
      </div>
      <Footer />
    </>
  );
}

export default Lawyer;
