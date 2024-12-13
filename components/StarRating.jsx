import React from "react";
import { IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

export function StarRatingper({ percentage = 0 }) {
  const validPercentage = !isNaN(percentage) && percentage >= 0 && percentage <= 100 ? percentage : 0;

  const stars = (validPercentage / 100) * 5;

  const fullStars = Math.floor(stars);
  const halfStars = stars - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - fullStars - halfStars);  
  const getColor = () => {
    if (validPercentage < 25) return '#F44336'; 
    if (validPercentage >= 25 && validPercentage <= 75) return '#FFC107'; 
    if (validPercentage > 75) return '#4CAF50'; 
    return '#FFFFFF'; 
  };

  return (
    <div className="flex gap-2" >
      {[...Array(fullStars)].map((_, i) => (
        <IoStarSharp key={`full-${i}`} color={getColor()} />
      ))}
      {halfStars === 1 && <IoStarHalfSharp key="half-star" color={getColor()} />}
      {[...Array(emptyStars)].map((_, i) => (
        <IoStarSharp key={`empty-${i}`} color="#7A7A7A" />
      ))}
    </div>
  );
}

export function StarRating({ rating, review }) {
  var star_num = rating?.toString();

  var isInteger = !(star_num?.indexOf(".") == -1);
  var whole_stars = [];
  for (let i = 0; i < Math.floor(star_num); i++) {
    whole_stars.push(<IoStarSharp key={`star-${i}`}/>);
  }
  whole_stars.push(isInteger ? <IoStarHalfSharp key="school-half-star" /> : null);

  return (
    <>
      <div>
        <div className=" flex flex-col gap-1 text-[18px] lg:text-[20px]  ">
          <div className="flex text-[#F97B24] items-center gap-2">
            {whole_stars}
            {review !== -1 && (
              <span className="text-[13px] w-[84px]  lg:flex justify-end md:text-white text-[#323232] font-semibold -mb-1">
                ({review} reviews)
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export function StarRatingschool({ rating, review }) {
  var star_num = rating?.toString();

  var isInteger = !(star_num?.indexOf(".") == -1);
  var whole_stars = [];
  for (let i = 0; i < Math.floor(star_num); i++) {
    whole_stars.push(<IoStarSharp  />);
  }
  whole_stars.push(isInteger ? <IoStarHalfSharp   /> : null);

  return (
    <>
      <div>
        <div className=" flex flex-col gap-1 text-[14px] lg:text-[20px]  ">
          <div className="flex text-[#F97B24] items-center gap-2">
            {whole_stars}
          </div>
          {review !== -1 && (
            <span className="text-[13px] w-full  lg:flex justify-center text-black  font-semibold -mb-1">
              ({review} reviews)
            </span>
          )}
        </div>
      </div>
    </>
  );
}
