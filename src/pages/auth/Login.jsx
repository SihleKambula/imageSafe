import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { reset, logUserIn } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, navigate, dispatch, isSuccess]);

  function handleSubmit() {
    const userData = { email, password };
    dispatch(logUserIn(userData));
  }

  //toast message
  const id = "error";
  const notify = () => {
    toast.error("Password or email is incorrect", {
      position: "top-center",
      toastId: id,
    });
  };

  if (isError) {
    notify();
  }

  return (
    <>
      <ToastContainer />
      <div className='h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100'>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <img
              src='/assets/logo.svg'
              className=' mx-auto h-20  w-auto '
              alt='image safe'
            />
            {/* <h2 className='mt-6 text-center text-3xl  text-gray-400 '>Login</h2> */}
            <form className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm'>
                <div>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='email-address'
                    onChange={(e) => setEmail(e.target.value)}
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
                    autoComplete='current-password'
                    value={password}
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    type='password'
                    required
                    className='appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    placeholder='Password'
                  />
                </div>
              </div>
              <div className='text-sm mt-2'>
                Don't have an account?
                <Link
                  to='/signup'
                  className=' ml-2 font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Sign up
                </Link>
              </div>
            </form>
            <button
              onClick={handleSubmit}
              type='submit'
              className=' mt-2 py-2 px-4 bg-indigo-900 text-white font-bold border-none rounded w-full  hover:bg-indigo-700 '
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
