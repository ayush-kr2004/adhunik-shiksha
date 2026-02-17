import { useState } from "react";
import "./index.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-6">
        Hello world!
      </h1>
      <Home />
    </>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden relative">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/10 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide hover:scale-110 transition-transform duration-300">
          AdhunikShiksha
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-pink-300 transition duration-300">
            Courses
          </a>
          <a href="#" className="hover:text-pink-300 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-pink-300 transition duration-300">
            Contact
          </a>
        </div>

        <button className="bg-pink-500 px-5 py-2 rounded-full hover:bg-pink-600 hover:scale-105 transition-all duration-300 shadow-lg">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Upgrade Your <span className="text-pink-400">Skills</span> <br />
            With Modern Learning
          </h2>

          <p className="text-lg text-gray-300 max-w-lg">
            Learn web development, programming, and real-world skills with
            AdhunikShiksha. Interactive courses, practical projects, and expert
            mentorship.
          </p>

          <div className="space-x-4">
            <button className="bg-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:scale-110 hover:bg-pink-600 transition-all duration-300 shadow-xl">
              Explore Courses
            </button>

            <button className="border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Glass Card */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-500 w-80">
            <h3 className="text-2xl font-bold mb-4">
              🔥 Featured Course
            </h3>
            <p className="text-gray-300 mb-6">
              Full Stack MERN Development with Real Projects
            </p>
            <button className="bg-pink-500 px-5 py-2 rounded-full hover:bg-pink-600 transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Floating Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

    </div>
  );
}

export default App;
