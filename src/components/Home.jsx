import React from 'react';
import { Button, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../assets/imgs/home.jpg';
import vd from '../assets/videos/demo.mp4';
// import Typewriter from './utils/Typewriter';
import CourseCard from './courses/CourseCard';
function Home({ courses = [] }) {
  return (
    <section className=" h-full ">
      <div className="flex flex-col md:flex-row  justify-center gap-8">
        <div className="md:flex-1 flex item-center flex-col gap-2 md:pr-4 md:pl-8 md:pt-16 pt-2 px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome to <span className="">CodeWithCoder</span>{' '}
          </h1>
          <h2 className="text-2xl font-bold">Learn</h2>
          {/* <Typewriter /> */}
          <p className="text-slate-700">
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! Code With
            Harry is my attempt to teach basics and those coding techniques to
            people in short time which took me ages to learn.
          </p>
          <div className="flex gap-4">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses
            </Link>
            <button className="btn btn-secondary">Explore Blog</button>
          </div>
        </div>
        <div className="flex-1 home-img">
          <img src={vg} alt="" />
        </div>
      </div>

      <div className="mt-12 ">
        <h1 className="text-3xl text-center text-bold">Latest Courses</h1>
        <div className="flex flex-wrap justify-evenly  py-8 ">
          {courses &&
            courses.length > 0 &&
            courses.map(item => (
              <CourseCard
                key={item._id}
                poster={item.poster}
                title={item.title}
                description={item.description}
                category={item.category}
                CreatedAt={item.CreatedAt}
                createdBy={item.createdBy}
                views={item.views}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
