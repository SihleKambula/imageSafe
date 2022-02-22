import React from "react";
import { Disclosure } from "@headlessui/react";
import { LogoutIcon, PlusIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-white'>
      {() => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='flex-1 flex items-center justify-start'>
                <div className='flex-shrink-0 flex items-start'>
                  <img
                    className=' h-8 w-auto'
                    src='./assets/logo.svg'
                    alt='Image Safe'
                  />
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='bg-indigo-900 p-1 rounded-full text-cyan-400 focus:outline-none'
                >
                  <PlusIcon className='h-6 w-6' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  className=' ml-2 p-1 text-gray-500 focus:outline-none'
                >
                  <LogoutIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
