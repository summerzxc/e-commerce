import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import Cookies from "js-cookie";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200 && response.data.token) {
        // Store the token in cookies
        Cookies.set("token", response.data.token);
        // Redirect to the admin panel
        router.push("/panel");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full md:flex-row flex-col gap-10 min-h-screen flex">
      <Head>
        <title>Soleil - Admin Login</title>
      </Head>
      <div
        className="h-[200px] md:h-auto md:basis-[30%]"
        style={{
          backgroundImage: "url('/images/panel-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="basis-[70%] h-screen pb-[100px] md:pb-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl bebas mb-8">Admin Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label className="form-control w-[300px]">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered input-ghost w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="form-control w-[300px]">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder=""
                className="input input-bordered input-ghost w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="submit"
              className="mt-8 w-full border-white border satoshi-medium duration-300 hover:text-[#101011] hover:bg-white py-3 rounded-md text-[14px]"
            >
              Enter
            </button>
          </form>
          <Link
            href={"/"}
            className="hover:text-[#101011] mt-4 py-2 px-4 rounded-full border hover:border-[#101011] hover:bg-white duration-300 satoshi-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
