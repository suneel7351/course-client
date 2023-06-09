import { Helmet } from 'react-helmet';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
      {' '}
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="My description" />
        <link rel="canonical" href="https://example.com/my-page" />
      </Helmet>
      <div className="h-[65vh] flex items-center flex-col justify-center gap-4">
        <h1 className="text-6xl">
          <RiErrorWarningFill />
        </h1>
        <h1 className="text-6xl">Page not found.</h1>
        <Link to="/">
          <button className="btn btn-secondary">Go To Home</button>
        </Link>
      </div>
    </>
  );
}

export default Notfound;
