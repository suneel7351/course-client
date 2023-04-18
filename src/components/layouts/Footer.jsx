import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
function Footer() {
  return (
    <div className="container mx-auto py-4 mt-12 flex justify-between items-center md:flex-row flex-col gap-2 md:gap-0">
      <div className="flex gap-4 items-center">
        {' '}
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png"
          alt=""
        />
        <h1 className="text-2xl">CodeWithCoder</h1>
        <div className="h-10 bg-slate-400 w-[2px]"></div>
      </div>
      <div className="text-slate-500">
        Copyright © 2023 course-clients.vercel.app
      </div>
      <div className="flex items-center gap-4">
        <a target="_blank" href="https://www.linkedin.com/in/suneel7351/">
          <AiFillLinkedin className="text-3xl text-slate-700 duration-500 hover:transform hover:scale-y-110  hover:scale-x-110" />
        </a>
        <a target="_blank" href="https://github.com/suneel7351">
          <AiFillGithub className="text-3xl text-slate-700 duration-500 hover:transform hover:scale-y-110 hover:scale-x-110" />
        </a>
        <a target="_blank" href="https://suneelkumar.vercel.app/">
          <CgProfile className="text-3xl text-slate-700 duration-500 hover:transform  hover:scale-y-110 hover:scale-x-110" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
