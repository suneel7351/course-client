import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../assets/imgs/home.jpg';
import CourseCard from './courses/CourseCard';
import { Helmet } from 'react-helmet';
function Home({ courses }) {
  return (
    <>
      {' '}
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My description" />
      </Helmet>
      <section className="  ">
        <div className="flex flex-col md:flex-row  justify-center gap-8">
          <div className="md:flex-1 flex item-center flex-col gap-2 md:pr-4 md:pl-8 md:pt-16 pt-2 px-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome to <span className="">CodeWithCoder</span>{' '}
            </h1>
            <h2 className="text-2xl font-bold">Learn</h2>
            {/* <Typewriter /> */}
            <p className="text-slate-700 text-lg">
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              coder is my attempt to teach basics and those coding techniques to
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
        <div className="container mt-16">
          <h1 className="text-center  text-2xl md:text-5xl mb-8">
            Recommanded Courses
          </h1>
          <div className="flex flex-wrap justify-evenly  py-8 ">
            {courses && courses.length > 0 ? (
              courses.map(item => {
                return (
                  <CourseCard
                    _id={item._id}
                    key={item._id}
                    poster={item.poster}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    CreatedAt={item.CreatedAt}
                    createdBy={item.createdBy}
                  />
                );
              })
            ) : (
              <h1 className="text-3xl text-slate-700 ">No Courses found.</h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
