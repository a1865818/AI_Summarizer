import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className="flex justify-between items-center w-full mb-10 pt-3" style = {{ display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", marginBottom:"40px", paddingTop:"10px"}}>
    {/* Logo */}
        <img
            src={logo}
            alt="sumz_logo"
            className="object-contain"
            style={{ width: "150px" }}
        />

        {/* GitHub Button */}
        <button
            type="button"
            onClick={() =>
            window.open("https://github.com/a1865818", "_blank")
            }
            className="black_btn"
        >
            GitHub
        </button>
    </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;