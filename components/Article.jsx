'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Article({categoryData}) {
    const [btn, setbtn] = useState(true);
    const [art, setArt] = useState("");
  
    useEffect(() => {
      if (categoryData != undefined || categoryData != "") {
        setArt(categoryData?.article);
      }
    }, [categoryData]);
    let prevState = false;
  
    const [isReadMoreShown, setReadMoreShown] = useState(prevState);
  
    const togglebtn = () => {
      setReadMoreShown((prevState = !prevState));
    };

  return (
    <div className=" w-[85vw] sm:w-[86vw] mx-auto my-16">
    <div className=" w-full sm:w-[84vw] rounded-lg mt-4  md:p-[40px] ">
      <div className="lg:text-3xl text-xl pb-4">   
        <h1 className="uppercase tracking-wide text-black font-bold">{categoryData?.slug.split('-').join(" ")}</h1>
      </div>

      <div className="flex w-full  mx-auto justify-center textcss">

        <div>
          {isReadMoreShown ? (
            <div
              className="innerDiv  text-black"
              dangerouslySetInnerHTML={{ __html: art }}
            ></div>
          ) : (
            <div
              className="innerDiv  text-black  "
              dangerouslySetInnerHTML={{
                __html: art != undefined ? art.substr(0, 1800) : "",
              }}
            ></div>
          )}
          <div className="text-[#02618f] text-right pr-5 cursor-pointer hover:underline">
            <span onClick={togglebtn}>
              {isReadMoreShown ? "Read Less" : "Read More"}
            </span>
          </div>
          <span
            style={{
              color: "grey",
              margin: "10px auto",
              display: "block",
              width: "fit-content",
              fontSize: "15px",
            }}
            className="dates"
          >
            Author -{" "}
            <Link href="/author">
              Vaibhav Negi
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}
