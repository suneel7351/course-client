import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function PaymentFail() {
  return (
    <>
      {' '}
      <Helmet>
        <title>Payment Failed</title>
        <meta name="description" content="My description" />
      </Helmet>
      <div className="h-[65vh] flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-cetner shadow-md p-4 w-[250px] mx-auto">
          <h1 className="text-5xl text-red-500">
            <RiErrorWarningFill />
          </h1>
          <h1>Payment Fail</h1>
          <Link to="/enroll" className="btn btn-primary">
            Try Again
          </Link>
        </div>
      </div>
    </>
  );
}

export default PaymentFail;
