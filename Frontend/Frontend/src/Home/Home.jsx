import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/banner";
import Freelawyer from "../components/Freelawyer";
import Services from "../components/Services";
import Faq from "../components/Faq";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freelawyer />
      <Services />
      <Faq />
    </div>
  );
}

export default Home;
