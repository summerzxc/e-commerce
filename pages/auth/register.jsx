import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Register() {
  return (
    <div className="w-full min-h-screen flex md:flex-row flex-col gap-10">
      <Head>
        <title>Soleil - Register</title>
      </Head>
      <div
        className="h-[200px] md:h-auto md:basis-[30%]"
        style={{
          backgroundImage: "url('/images/register-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="basis-[70%] pb-[100px] md:pb-0 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl bebas mb-8">Register</h1>
          <label className="form-control w-[300px]">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-ghost w-full max-w-xs"
            />
          </label>
          <label className="form-control w-[300px]">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-ghost w-full max-w-xs"
            />
          </label>
          <label className="form-control w-[300px]">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-ghost w-full max-w-xs"
            />
          </label>
          <button className="mt-8 w-full border-white border satoshi-medium  duration-300 hover:text-[#101011] hover:bg-white py-3 rounded-md text-[14px]">
            Register
          </button>
          <p className="mt-5 text-[#888]">
            Already have an account?{" "}
            <Link href={"/auth/login"} className="text-white">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
