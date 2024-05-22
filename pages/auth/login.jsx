import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        const { token } = response.data;
        Cookies.set("token", token, { expires: 7 });
        router.push("/"); // Redirect to home page on successful login
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen flex md:flex-row flex-col gap-10">
      <Head>
        <title>Soleil - Login</title>
      </Head>
      <div
        className="h-[200px] md:h-auto md:basis-[30%]"
        style={{
          backgroundImage: "url('/images/login-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      ></div>
      <div className="basis-[70%] h-screen pb-[100px] md:pb-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl bebas mb-8">Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <label className="form-control w-[300px]">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered input-ghost bg-[#101011] w-full max-w-xs"
              />
            </label>
            <label className="form-control w-[300px]">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered input-ghost bg-[#101011] w-full max-w-xs"
              />
            </label>
            <button className="mt-8 w-full border-white border satoshi-medium duration-300 hover:text-[#101011] hover:bg-white py-3 rounded-md text-[14px]">
              Login
            </button>
          </form>
          <p className="mt-5 text-[#888]">
            Don't have an account?{" "}
            <Link href={"/auth/register"} className="text-white">
              Sign up
            </Link>
          </p>
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
