"use client"

import React, { useState, useEffect } from 'react';

export default function NewCarl({ data }) {
  const initial = {
    index: 0,
    position: 550,
    direction: 'forward', 
  };

  const [currentIndex, setCurrentIndex] = useState(initial);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const isAtEnd = prevIndex.index === data.length - 1;
        const isAtStart = prevIndex.index === 0;
        const nextDirection =
          isAtEnd ? 'reverse' : isAtStart ? 'forward' : prevIndex.direction;
        const nextIndex =
          nextDirection === 'forward'
            ? (prevIndex.index + 1) % data.length
            : (prevIndex.index - 1 + data.length) % data.length;

        return {
          index: nextIndex,
          position: 550 - nextIndex * 156,
          direction: nextDirection,
        };
      });
    }, 5000); 
    return () => clearInterval(autoPlay);
  }, [data.length]);

  return (
    <>
      <div className="h-[300px] w-full md:hidden flex flex-col justify-center items-center overflow-hidden">
        <div
          className="duration-500 h-[250px] w-[1200px] flex gap-14 z-20"
          style={{ transform: `translateX(${currentIndex.position}px)` }}
        >
          {data.map((im, index) => (
            <img
              key={index}
              alt="some"
              src={im.img}
              style={{
                transform: `translateY(${
                  currentIndex.index === index ? '10' : '50'
                }px)`,
              }}
              className={`p-4 object-fit rounded-full filter shadow-[0_3px_5px_rgba(256,256,256,256)] duration-500 h-[100px] w-[100px] relative ${
                currentIndex.index === index
                  ? `opacity-100 backdrop-blur-md`
                  : `opacity-60 backdrop-blur-sm`
              } bg-white`}
            />
          ))}
        </div>
        <div className="h-[300px] w-[190px] shadow-xl justify-center text-center flex items-end pb-4 rounded-lg bg-[#02618f] relative -top-10">
          <p className="text-[16px] px-1 font-semibold text-white">
            {data[currentIndex.index].school}
          </p>
        </div>
        <div className="h-[80px] w-[200px] flex gap-3 justify-center items-center relative -top-4">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() =>
                setCurrentIndex({
                  ...currentIndex,
                  index: index,
                  position: 550 - index * 156,
                })
              }
              className={`duration-500 ${
                currentIndex.index === index
                  ? `bg-[#02618f] h-[20px] w-[20px]`
                  : `bg-slate-300`
              } h-[10px] w-[10px] rounded-full cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
