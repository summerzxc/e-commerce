import React, { useEffect } from "react";
import Navbar from "./components/_molecule/Navbar";

import Features from "./components/home/Features";
import About from "./components/home/About";
import CardRow from "./components/home/CardRow";
import ChildCare from "./components/_atom/ChildCare";
import Footer from "./components/_molecule/Footer";
import Hero from "./components/home/Hero";
import HomeCardRow from "./components/home/HomeCardRow";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <main className="max-w-[2160px] px-8 mx-auto">
      <Head>
        <title>Soleil</title>
      </Head>
      <Navbar />
      <Hero />
      <div className="h-screen w-full"></div>
      <Features />
      <About
        value="It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
      />
      <HomeCardRow />
      <ChildCare />
      <Footer />
    </main>
  );
}
