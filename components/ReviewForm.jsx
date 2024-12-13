"use client";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import StarRatings from "react-star-ratings";
import { v4 as uuidv4 } from "uuid";
import { baseRe } from "@/app/api/airtable";
import { signOut } from "next-auth/react";
import { RiLogoutCircleLine } from "react-icons/ri";
function ReviewForm({ toggle1, setToggle1, id, school, user }) {
  const [warning, setWarning] = useState(false);
  const [data, setData] = useState({
    academics: 0,
    infrastructure: 0,
    administration: 0,
    extracurricular: 0,
    schoolRating: 5,
    title: "",
    reviewMessage: "",
    schoolId: id,
    schoolSlug: school?.slug,
  });
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "1",
    },
    {
      value: 40,
      label: "2",
    },
    {
      value: 60,
      label: "3",
    },
    {
      value: 80,
      label: "4",
    },
    {
      value: 100,
      label: "5",
    },
  ];

  async function handle() {
    if (data.title == "" || data.reviewMessage == "") {
      setWarning(true);
    } else {
      try {
        const createdRecords = await baseRe(
          school?.sheetName + "-reviews"
        ).create([
          {
            fields: {
              academics: data?.academics,
              infrastructure: data?.infrastructure,
              administration: data?.administration,
              extracurricular: data?.extracurricular,
              schoolRating: data?.schoolRating,
              title: data?.title,
              reviewmessage: data?.reviewMessage,
              userName: user?.name,
              userId: uuidv4(),
              userEmail: user?.email,
              userImg: user?.image,
              schoolId: data?.schoolId,
              schoolSlug: data?.schoolSlug,
            },
          },
        ]);
        const createdRecord = {
          id: createdRecords[0].id,
          fields: createdRecords[0].fields,
        };
        signOut("google");
        setToggle1(false);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <Popup
      open={toggle1}
      closeOnDocumentClick={false}
      closeOnEscape={false}
      lockScroll={true}
      contentStyle={{
        background: "transparent",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        border: "none",
        overflowY: "auto",
      }}
      // className='w-[90vw] sm:w-[50vw]'
    >
      <div className="text-black relative  w-[100vw] sm:w-[50vw] p-5 rounded-2xl bg-white ">
        <h1 className=" text-xl sm:text-3xl text-center">LEAVE A REVIEW</h1>
        <div className=" flex  justify-between sm:justify-around gap-0 sm:gap-16 w-[100%]  mt-2  sm:mt-5 ">
          <p className=" text-sm sm:text-2xl pt-2 sm:pt-0  w-[20%]  ">
            Academics
          </p>
          <Box sx={{ width: "60%" }}>
            <Slider
              defaultValue={0}
              onChange={(e) => setData({ ...data, academics: e.target.value })}
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              max={100}
            />
          </Box>
        </div>
        <div className=" flex  justify-between  sm:justify-around gap-0 sm:gap-16  mt-2 sm:mt-5">
          <p className=" text-sm sm:text-2xl w-[20%] pt-2 sm:pt-0   ">
            Infrastructure
          </p>
          <Box sx={{ width: "60%" }}>
            <Slider
              defaultValue={0}
              onChange={(e) =>
                setData({ ...data, infrastructure: e.target.value })
              }
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              max={100}
            />
          </Box>
        </div>
        <div className=" flex  justify-between gap-0 sm:gap-16  sm:justify-around mt-2 sm:mt-5">
          <p className=" text-sm sm:text-2xl pt-2  w-[20%]  ">Administration</p>
          <Box sx={{ width: "60%" }}>
            <Slider
              defaultValue={0}
              onChange={(e) =>
                setData({ ...data, administration: e.target.value })
              }
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              max={100}
            />
          </Box>
        </div>
        <div className=" flex  justify-between gap-0 sm:gap-16 sm:justify-around mt-2 sm:mt-5 ">
          <p className=" text-sm sm:text-2xl w-[20%]  pt-2   ">
            Extracurricular
          </p>
          <Box sx={{ width: "60%" }}>
            <Slider
              defaultValue={0}
              onChange={(e) =>
                setData({ ...data, extracurricular: e.target.value })
              }
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              max={100}
            />
          </Box>
        </div>

        <div className=" flex  justify-between  sm:justify-around  mt-2 sm:mt-5 ">
          <p className=" text-sm sm:text-2xl  pt-2   ">Overall Rating</p>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <div classname="w-[60%]">
              <StarRatings
                rating={data.schoolRating}
                starRatedColor="orange"
                changeRating={(e) => setData({ ...data, schoolRating: e })}
                numberOfStars={5}
                name="rating"
                starDimension="30px"
              />
            </div>
          </Box>
        </div>
        <div className="    mt-5 ">
          <p className="  text-sm sm:text-2xl    ">Care to share more?</p>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder=" Title"
            className=" w-[100%] border mt-2 border-gray-800 p-2 rounded-md "
          />
          <textarea
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="reviewMessage"
            value={data.reviewMessage}
            placeholder="review"
            className=" w-[100%] border border-gray-800 p-2 rounded-md  mt-4 "
            rows="2"
          ></textarea>
        </div>

        <button
          className="text-black  font-bold text-3xl absolute top-2 right-5 "
          onClick={() => setToggle1(false)}
        >
          X
        </button>
        <button
          className="text-black  font-bold  absolute top-3 right-12"
          onClick={() => {
            signOut();
            setToggle1(false);
          }}
        >
          <RiLogoutCircleLine size={24} />
        </button>
        <div className=" flex justify-center  ">
          <button
            onClick={handle}
            className=" text-xl px-4 py-2  bg-blue-800  text-white  rounded-md font-semibold  border border-black "
          >
            Submit
          </button>
        </div>
        {warning && (
          <p className=" text-center mt-2 text-red-600  ">
            *All Fields Are Mandatory
          </p>
        )}
      </div>
    </Popup>
  );
}

export default ReviewForm;
