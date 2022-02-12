import React from "react";
import Images from "../../components/Images";
import Navbar from "../../components/Navbar";
import Masonry from "react-masonry-component";
import ImageModal from "../../components/Modal";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='py-5 px-5'>
        <Masonry elementType={"ul"}>
          <Images url='https://images.unsplash.com/photo-1572363420552-058bd41af8c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1551791738-61d1f75d6166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1598823439922-ba8764146c80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbHZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1551791738-61d1f75d6166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1551791738-61d1f75d6166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1551791738-61d1f75d6166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Images url='https://images.unsplash.com/photo-1551791738-61d1f75d6166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29sdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </Masonry>
        <ImageModal />
      </main>
    </>
  );
};

export default Home;
