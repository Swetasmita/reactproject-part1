import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./rating.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0); //rating initial value 0
  const [hover, setHover] = useState(0);   //hover initial value 0

  //Handle Rating
  const handleClick = (index) => {
    console.log(index); //rating is 1 for first click
    setRating(index);
  };
  //Handle Hover 
  const handleMouseHover = (index) => {
    setHover(index);
  };
  //Handle Mouse Leave
  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="star-container">
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {       
       index += 1;
       const isActive = index <= (rating || hover);
        return (
          <FaStar
            key={index}
            className= { isActive ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter ={ () => handleMouseHover(index)}
            onMouseLeave ={() => handleMouseLeave()}
            size={40}
          />
        );
      })}     
    </div>
    <div>
        <h2>Rating Count: {rating}</h2>
      </div>
    </div>
  );
};
export default StarRating;
