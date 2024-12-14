"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function FAQ({ categoryData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [catFaq, setCatFaq] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (categoryData !== undefined && categoryData !== null) {
      try {
        const sanitizedJson = categoryData.FAQ.replace(
          /[\x00-\x1F\x7F-\x9F]/g,
          ""
        );
        //  const authorArticle = categoryData;
        // const article = JSON.parse(authorArticle);
        //  console.log(authorArticle);

        const obj = JSON.parse(sanitizedJson);
        setCatFaq(obj);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [categoryData]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const text = { __html: categoryData.article };

  const words = categoryData.article.split(" ");
  const initialText = { __html: words.slice(0, 200).join(" ") };
  const fullText = text;

  return (
    <div className="md:mt-10 mt-8">
      <div className=" w-full h-auto bg-background-dark px-4 sm:px-8 md:px-[100px] pt-14 flex flex-col items-center">
        <div className="flex items-center justify-center w-full ">
          <div className="font-bold gap-8 md:gap-14 text-white flex justify-center items-center text-[18px] sm:text-[24px] px-4 text-center ">
            <div className="w-64 border-t-2 h-1 bg-white"></div>

            <div className="w-[50%]">
              <h1>Boarding Schools In {categoryData.City}</h1>
            </div>
            <div className="w-64 border-t-2 h-1 bg-white"></div>
          </div>
        </div>

        <div className="text-[#323232] text-[12px] sm:text-[14px] pt-8 text-justify sm:max-w-[90%]">
          <p>
            {isExpanded ? (
              <div
              style = {{ color:"white"}}
                className="article-container"
                dangerouslySetInnerHTML={text}
              />
            ) : (
              <div
              style = {{ color:"white"}}
                className="article-container "
                dangerouslySetInnerHTML={initialText}
              />
            )}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white m-3 underline hover:text-blue-700 focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <Link href="/author">
          <p className="text-white font-semibold text-[12px] sm:text-[16px] text-center pt-8 pb-8">
            Author : Vaibhav Negi
          </p>
        </Link>

        <hr className="w-full max-w-[600px] border-t-2 border-white hidden md:block pb-10" />
      </div>

      <div className="pb-5 lg:pb-20 text-black w-[86vw] mx-auto">
        <div className="flex gap-2 lg:text-3xl text-2xl mt-10 sm:mt-24 mb-2 sm:mb-10">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#000000]">
            FAQs
          </h2>
        </div>
        <div className="container">
          {catFaq.map((faq, index) => (
            <div key={index}>
              <ul className="flex flex-col">
                <li
                  className="bg-white my-2 border-b-[3px] rounded-lg"
                  style={{ borderColor: "#9B1750" }}
                >
                  <h2
                    className="flex flex-row md:justify-between w-full md:w-[600px] lg:w-[86vw] font-semibold p-3 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-[#323232] text-[14px] w-[350px] lg:w-[750px]">
                      {faq.ques}
                    </span>
                    <svg
                      className={`w-8 h-8 fill-current text-[#000000] transform transition-transform duration-500 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                  </h2>
                  {activeIndex === index && (
                    <div
                      className="overflow-hidden transition-max-height transform transition-transform  duration-700 ease"
                      style={{
                        maxHeight: activeIndex === index ? "500px" : "0px",
                      }}
                    >
                      <p className="p-3 text-[#323232] text-[14px]">
                        {faq.ans}
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
