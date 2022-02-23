import React from "react";
import Images from "../../components/Images";
import Navbar from "../../components/Navbar";
import Masonry from "react-masonry-component";
import ImageModal from "../../components/Modal";
import { Navigate } from "react-router-dom";

const Home = ({ user }) => {
  // if (!user) {
  //   return <Navigate to='/login' replace />;
  // }
  return (
    <>
      <Navbar />
      <main className='p-5'>
        <Masonry elementType={"ul"}>
          <Images url='https://images.unsplash.com/photo-1572363420552-058bd41af8c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1551791738-61d1f75d6166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1598823439922-ba8764146c80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbHZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1629070314158-660a52fe9dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbHZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1598823440012-db3cfcc98ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbHZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        </Masonry>
        {/* <ImageModal /> */}
      </main>
    </>
  );
};

export default Home;
