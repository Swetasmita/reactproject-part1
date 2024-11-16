import React, { useEffect, useState } from "react";
import "./slider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  //Fetching Image API
  async function fetchImages(imgUrl) {
    //const url = "https://picsum.photos/v2/list?page=2&limit=10";
    try {
      setLoading(true);
      const response = await fetch(`${imgUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data); //display images array
        // console.log(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setErrorMsg(err.message);
      setLoading(false);
    }
  }
  //useEffect to manage fetching api
  useEffect(() => {
    if (url != "") fetchImages(url);
  }, [url]);

 // console.log(images); //display images
  //loading and error messages
  if (loading) {
    return <div>Loading in Progress! Please wait.</div>;
  }
  if (errorMsg != null) {
    return <div>Error occured! {errorMsg}</div>;
  }

//handle next slide - image.length- 1 = 8 -1 = 7 (is the last slide)
const nextSlide = () =>{
setSlide(slide ===  images.length - 1 ? 0 : slide + 1);
}
//handle previous slide - last one 0
const previousSlide = () =>{
    setSlide(slide === 0 ? images.length - 1 : slide - 1);    
}
  return (
    <div className="carousel-container">
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left"  onClick={previousSlide}/>
      {images && images.length
        ? images.map((item, idx) => {
            return (
              <img
                key={idx}
                alt={item.download_url}
                src={item.download_url}
                className={ slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right"   onClick={nextSlide}/>
      {/* Add Indicators for arrow */}
      <span className="circle-indicators">
        {
        images && images.length?
        images.map((_, idx) => {
        return <button
          key = {idx}
          onClick={() => setSlide(idx)}
          className= { slide === idx ? "indicator" : "indicator indicator-inactive" }>
          </button>
        }) : null} 
      </span>
    </div>
    </div>
  );
};

export default ImageSlider;
