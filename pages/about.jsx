import React from "react";
import Navbar from "./components/_molecule/Navbar";
import ChildCare from "./components/_atom/ChildCare";
import Footer from "./components/_molecule/Footer";
import Marquee from "react-fast-marquee";
import AboutTopImg from "./components/_molecule/AboutTopImg";
import AboutBottomImg from "./components/_molecule/AboutBottomImg";
import AboutText from "./components/_molecule/AboutText";
import Head from "next/head";
export default function About() {
  return (
    <div className="max-w-[2160px] px-8 mx-auto">
      <Head>
        <title>Soleil - About</title>
      </Head>
      <Navbar />
      <AboutTopImg />
      <AboutText />
      <AboutBottomImg />
      <Marquee
        gradient={true}
        gradientColor="#101011"
        speed={60}
        className="overflow-hidden mb-10 mt-[80px]"
      >
        <h1 className="text-5xl text-white bebas mr-2">
          Authentic Luxury, Personalized Service.
        </h1>
        <h1 className="text-5xl text-white bebas mr-2">
          Authentic Luxury, Personalized Service.
        </h1>
        <h1 className="text-5xl text-white bebas mr-2">
          Authentic Luxury, Personalized Service.
        </h1>
      </Marquee>
      <ChildCare />
      <Footer />
    </div>
  );
}
