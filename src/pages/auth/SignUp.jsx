import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleEmailAndPasswordSignUp } from "../../database/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <div>
        <img
          src='/assets/logo.svg'
          className=' mx-auto h-20  w-auto '
          alt='image safe'
        />

        <form className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id='email-address'
                name='email'
                value={email}
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                value={password}
                name='password'
                type='password'
                autoComplete='new-password'
                required
                className='appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='confirm' className='sr-only'>
                Confirm password
              </label>
              <input
                id='confirm'
                name='confirm'
                type='password'
                required
                className='appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Confirm password'
              />
            </div>
          </div>
          <div className='text-sm mt-2'>
            Already have an account?
            <Link to='/login' className=' ml-2 font-medium text-indigo-500'>
              Login
            </Link>
          </div>
        </form>
        <button
          onClick={() => handleEmailAndPasswordSignUp(email, password)}
          className=' mt-2 py-2 px-4 bg-indigo-700 text-white font-bold border-none rounded w-full '
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
