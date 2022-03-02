import React from "react";

const Images = ({ url }) => {
  return (
    <li className='mx-2 my-2 w-72  '>
      <img
        className='rounded-lg hover:opacity-50 hover:cursor-pointer'
        src={url}
      />
    </li>
  );
};

export default Images;
