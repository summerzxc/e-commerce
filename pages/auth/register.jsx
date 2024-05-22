import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/add",
        {
          username,
          email,
          password,
        }
      );

      if (response.status === 200) {
        setSuccess("Registration successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        router.push("/auth/login"); // Redirect to home page
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

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
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center"
          >
            <label className="form-control w-[300px]">
              <div className="label">
                <span className="label-text">Username</span>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered input-ghost w-full max-w-xs"
              />
            </label>
            <label className="form-control w-[300px]">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered input-ghost w-full max-w-xs"
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
                className="input input-bordered input-ghost w-full max-w-xs"
              />
            </label>
            <button className="mt-8 w-full border-white border satoshi-medium duration-300 hover:text-[#101011] hover:bg-white py-3 rounded-md text-[14px]">
              Register
            </button>
          </form>
          <p className="mt-5 text-[#888]">
            Already have an account?{" "}
            <Link href={"/auth/login"} className="text-white">
              Log In
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
