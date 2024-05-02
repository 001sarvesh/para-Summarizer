import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src="sarv.jpeg" alt='logo' className='w-28 h-28 object-cover rounded-full' />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/001sarvesh", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles <br className='max-md:hidden' />
        <span className='orange_gradient '>Using our AI Summarizer</span>
      </h1>
      <h2 className='desc'>
        Paste the link of the articles below , I am 
        here to give you it's summarization 
      </h2>
    </header>
  );
};

export default Hero;