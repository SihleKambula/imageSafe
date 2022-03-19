import React, { useEffect, useState } from "react";
import Images from "../../components/Images";
import Navbar from "../../components/Navbar";
import Masonry from "react-masonry-component";
import ImageModal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { DB } from "../../database/firebase";

const Home = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user) {
      // get real time data
      const unsub = onSnapshot(doc(DB, "users", user.uid), (doc) => {
        setImages(doc.data());
      });
      return () => {
        unsub();
      };
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <main className='p-5'>
        <Masonry elementType={"ul"}>
          {images?.images.lenght && <p>No Images</p>}
          {images &&
            images.images.map((image, index) => (
              <div
                key={index}
                onClick={() => {
                  setImageUrl(image);
                  setOpen(true);
                }}
              >
                <Images url={image} />
              </div>
            ))}
        </Masonry>
        <ImageModal open={open} setOpen={setOpen} imageUrl={imageUrl} />
      </main>
    </>
  );
};

export default Home;
