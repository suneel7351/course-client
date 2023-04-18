import React from 'react';
import { Helmet } from 'react-helmet';
function Work() {
  return (
    <>
      {' '}
      <Helmet>
        <title>Under dev.</title>
        <meta name="description" content="My description" />
      </Helmet>
      <div className="flex items-center justify-center h-[65vh] text-slate-700 text-4xl">
        Work in under development.
      </div>
    </>
  );
}

export default Work;
