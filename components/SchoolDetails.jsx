"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { StarRatingschool, StarRating } from "./StarRating";
import { Line } from "rc-progress";
import ReviewForm from "./ReviewForm";
import Enquire from "./Enquire";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { base } from "@/app/api/airtable";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ConsultationPopup from "./ConsultationPopup";

const getProgressBarColor = (value) => {
  if (value < 25) {
    return "#FF0000";
  } else if (value < 75) {
    return "#FFD700";
  } else {
    return "#008000";
  }
};

const CircularProgressWithIcon = ({ value, svgSrc, svgAlt }) => {
  const progressBarColor = getProgressBarColor(value);
  return (
    <div className="relative z-20 w-[100px] h-[100px] bg-gradient-to-b  from-[#F1F4F9] to-[#C6D1E3] rounded-full">
      {/* Circular Progress Bar */}
      <CircularProgressbar
        value={value}
        text={`${Math.round(value)}%`}
        styles={buildStyles({
          pathColor: progressBarColor,
          trailColor: "#F8F8F8",
          textColor: "#02618f",
          textSize: "18px",
        })}
      />

     
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={svgSrc}
          width={1000}
          height={1000}
          alt={svgAlt}
          className="w-[100px] h-[100px]"
        />
      </div>
    </div>
  );
};

const facility = [
  {
    imageSrc: "/Swimming.svg",
    facility: "Swimming Pool",
    check: "Swimming_Pool",
  },
  {
    imageSrc: "/online class.svg",
    facility: "Online Classes",
    check: "Online_Classes",
  },
  {
    imageSrc: "/video.svg",
    facility: "Audio/Video",
    check: "Photography",
  },
  {
    imageSrc: "/robotics.svg",
    facility: "Robotics",
    check: "Robotics_Lab",
  },
  {
    imageSrc: "/smartclass.svg",
    facility: "Smart Classes",
    check: "Smart_Classes",
  },
  {
    imageSrc: "/shooting.svg",
    facility: "Shooting",
    check: "Indoor_Games",
  },
  {
    imageSrc: "/Basketball.svg",
    facility: "Basketball Court",
    check: "Basketball_Court",
  },
  {
    imageSrc: "/table-tannis.svg",
    facility: "Table Tennis",
    check: "Tennis_Court",
  },
  {
    imageSrc: "/Playground.svg",
    facility: "Playground",
    check: "Play_Ground",
  },

  {
    imageSrc: "/Badminton.svg",
    facility: "Badminton Court",
    check: "Badminton_Court",
  },
];

const ReviewCard = ({ userName, userImg, schoolRating, reviewmessage }) => (
  <div className="md:m-20 p-8  md:p-0  md:mb-4 ">
    <div className="flex space-x-10 mb-2 ">
      <div className="w-20 h-[56px] md:h-[67px] rounded-[50%]">
        <img
          className="w-20 h-20 rounded-full"
          src={userImg}
          alt={`${userName}'s Profile`}
        />
      </div>
      <div className="w-full h-auto space-y-4">
        <p className="text-start">{userName}</p>

        <StarRating rating={schoolRating} review={-1} />

        <p className="text-[#323232] hidden md:block text-start">
          {reviewmessage}
        </p>
      </div>
    </div>
    <p className="text-[#323232] md:hidden text-justify mt-8">
      {reviewmessage}
    </p>
  </div>
);

const SchoolDetails = ({ school, reviews, city, id }) => {
  const [showFullText, setShowFullText] = useState(false);

  // for colors in progressbar
  const infrastructureValue = school?.Infrastructure || 0;
  const textColor = getProgressBarColor(infrastructureValue);

  const administrationValue = school?.Administration || 0;
  const textColor2 = getProgressBarColor(administrationValue);

  const academicsValue = school?.Academics || 0;
  const textColor3 = getProgressBarColor(academicsValue);

  const ExtracurricularValue = school?.Extracurricular || 0;
  const textColor4 = getProgressBarColor(ExtracurricularValue);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };
  const [total, setTotal] = useState(0);
  const [starv, setStarv] = useState(5);
  const [toggle, setToggle] = useState(2);
  const session = useSession();
  const [toggle1, setToggle1] = useState(false);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    document.body.style.overflow = "hidden";
    setPopupOpen(true);
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";
    setPopupOpen(false);
  };

  // enquire popup
  const [isOpenpopup, setIsOpenpopup] = useState(false);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const toggleBookingPopup = () => {
    setIsOpenpopup(true);
  };

  const toggleBookingPopupSmall = () => {
    setIsOpenpopup(true);
    toggleDrawer();
  };

  const toggleBookingClosePopup = () => {
    setIsOpenpopup(false);
  };

  function handle() {
    // console.log(session?.status);
    if (session?.status == "authenticated") {
      setToggle1(true);
    } else {
      signIn("google");
    }
  }
  useEffect(() => {
    let total1 = 0;
    reviews.map((r) => {
      total1 += r.schoolRating / reviews.length;
    });
    setTotal(total1);
  }, []);

  async function averge() {
    const sum = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.infrastructure || 0);
    }, 0);
    const sum1 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.academics || 0);
    }, 0);
    const sum2 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.extracurricular || 0);
    }, 0);
    const sum3 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.administration || 0);
    }, 0);
    const sum4 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.schoolRating || 0);
    }, 0);

    const average = sum / reviews.length;
    const average1 = sum1 / reviews.length;
    const average2 = sum2 / reviews.length;
    const average3 = sum3 / reviews.length;
    const average4 = sum4 / reviews.length;

    try {
      const res = await base(school?.sheetName).update([
        {
          id,
          fields: {
            Infrastructure: average.toString(),
            Academics: average1.toString(),
            Extracurricular: average2.toString(),
            Administration: average3.toString(),
            rating: average4.toString(),
            numOfReviews: reviews.length.toString(),
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    averge();
  }, []);

  const [slideClass, setSlideClass] = useState("translate-x-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollY) {
      setSlideClass("translate-x-full");
    } else {
      setSlideClass("translate-x-0");
    }

    setLastScrollY(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <section className="hidden md:block">
        <div
          className="relative     grid place-content-center bg-no-repeat h-[60vh] mt-10"
          style={{
            backgroundImage: ` url("/aboutbanner.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" ">
            <div className="md:text-background-dark  text-center flex flex-col md:justify-center md:items-center ">
              <div className="flex flex-col gap-6 font-bold p-2">
                <p className="text-4xl  text-left  md:text-center">
                  {school?.name}
                </p>
                <div className="text-left flex justify-center ">
                  <button
                    className="w-[180px]  shadow-md h-[40px] bg-background-dark text-white rounded-lg"
                    // onClick={openPopup}
                    onClick={toggleBookingPopup}
                  >
                    Enquire Now
                  </button>
                  <Enquire
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    school={school?.name}
                  />
                </div>
              </div>
              <StarRatingschool
                rating={Math.ceil(school?.rating)}
                need="yes"
                review={school?.numOfReviews}
              />
            </div>
            {isOpenpopup && (
              <ConsultationPopup setClose={toggleBookingClosePopup} />
            )}
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <div
          className="relative  grid place-content-center bg-no-repeat h-[65vh] mt-10"
          style={{
            backgroundImage: `url("/aboutbanner.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" ">
            <div className="text-background-dark text-center flex flex-col justify-center items-center ">
              <div className="flex flex-col gap-6 font-bold p-2">
                <p className="text-3xl text-center">{school?.name}</p>
                <div className="text-left flex justify-center ">
                  <button
                    className="w-[180px]  shadow-md h-[40px] bg-background-dark text-white rounded-lg"
                    // onClick={openPopup}
                    onClick={toggleBookingPopup}
                  >
                    Enquire Now
                  </button>
                  <Enquire
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    school={school?.name}
                  />
                </div>
              </div>
              <StarRating
                rating={Math.ceil(school?.rating)}
                need="yes"
                review={school?.numOfReviews}
                className="text-white"
              />
            </div>
            {isOpenpopup && (
              <ConsultationPopup setClose={toggleBookingClosePopup} />
            )}
          </div>
        </div>
      </section>
      <section className=" sm:hidden    gap-8 overflow-scroll md:overflow-hidden mt-10 px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide className="">
            <img
              src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/G-${school?.Image_Code}.png`}
              className="w-[400px] h-[333px] rounded-3xl"
            />
            <div className="min-h-10"></div>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/H-${school?.Image_Code}.png`}
              className="w-[400px] h-[333px] rounded-3xl"
            />
            <div className="min-h-10"></div>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/I-${school?.Image_Code}.png`}
              className="w-[400px] h-[333px] rounded-3xl"
            />
            <div className="min-h-10"></div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="w-full  mx-auto mt-10 ">
        <div>
          <div className="flex justify-center md:space-x-20 md:sticky md:top-0 bg-white">
            <section className="space-y-5 md:w-[570px] md:h-[750px] px-6 md:px-0">
              <p className=" text-[24px] sm:text-[32px] md:w-[239px]  md:h-[54px] md:text-left ">
                About School
              </p>
              <hr className="w-auto md:w-[550px] h-0.5 bg-black" />

              <div dangerouslySetInnerHTML={{__html:school?.Long_Description}} className="article-container text-[16px] h-[323px] md:w-[570px] text-[#898989] text-justify p-2 overflow-y-scroll">
                
              </div>

              <section className="space-y-2    md:space-y-5">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {school?.feefrom && (
                      <div className="mt-4">
                        <div className=" gap-2 md:gap-4 flex">
                          <Image
                            src="/currency-rupee.svg"
                            alt="Rupee Icon"
                            className="w-[30px] h-[30px] text-[#898989]"
                            width={1000}
                            height={1000}
                          />
                          <p className="text-[16px] md:grid md:place-content-center text-[#898989]">
                            Annual Fee{" "}
                          </p>
                        </div>
                        <p className="text-[16px] pl-8 text-[#323232]">
                          ₹{school?.feefrom} - ₹{school?.feeto} 
                        </p>
                      </div>
                    )}
                    <div className="md:m-[10px] pt-4 md:mt-0">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/map.svg"
                          alt="Rupee Icon"
                          className="w-[30px] h-[30px] text-[#898989]"
                          width={1000}
                          height={1000}
                        />
                        <p className="text-[#898989]">Address</p>
                      </div>
                      <p className="pl-8">
                        {school?.Address},{school?.Town}
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </section>
            </section>

            <section className=" hidden  sm:block gap-8 rounded-t-[30px]  bg-[#F3F3F3]">
              <div className="bg-[#F3F3F3]">
                <div className="w-[40px] h-[40px] ml-6">
                  <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-background-dark">
                    1
                  </p>
                </div>
                <hr className=" h-0.5 pt-[1px] bg-background-dark ml-6 mr-6 mb-16 mt-4" />
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1729853967/Go%20Edu/${city}/G-${school?.Image_Code}.png`}
                  alt="img"
                  className="w-[625px] h-[285px] mb-5"
                />
              </div>

              <div className="overflow-hidden">
                <section
                  className={`bg-background-dark mb-32 text-white rounded-md p-4 h-[127px] flex justify-center items-center rounded-l-full top-20 right-0 transform transition-transform duration-[1800ms] ease-in-out ${slideClass}`}
                >
                  <div className="text-center text-xs md:text-[16px] grid place-content-center">
                    <div className="space-x-9 flex">
                      <div className="space-y-4">
                        <div className="font-semibold">School Type</div>
                        {school?.day_schools ? (
                          <p>Day-Boarding</p>
                        ) : (
                          <p>Full-Boarding</p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="font-semibold">Board</div>
                        <p>
                          {school?.cbse_schools && "CBSE "}
                          {school?.icse_isc_schools && "ICSE/ISC "}
                          {school?.cie_schools && "CIE "}
                          {school?.ib_schools && "IB "}
                          {school?.igcse_schools && "IGCSE"}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="font-semibold">Classes</div>
                        <p>
                          {school?.classfrom} to {school?.classto}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="font-semibold">School Gender</div>
                        {school?.coed_schools ? (
                          <p>Co-Ed</p>
                        ) : school?.girls_schools ? (
                          <p>Girls School</p>
                        ) : (
                          <p>Boys School</p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>

          <div className="flex md:justify-center px-6 md:px-0  md:space-x-20 md:sticky md:top-0 mt-6 md:mt-0 bg-white md:h-[100vh] ">
            <section className=" md:w-[570px] md:h-[750px]  md:px-0">
              <p className="ml-2 md:ml-0 text-[24px] sm:text-[24px] md:text-[32px] md:w-[293px] h-auto md:h-[54px] md:mb-4 mb-4 mt-6 text-[#323232]">
                School Statistics
              </p>

              <hr className=" w-[300px] ml-2 md:ml-0 md:w-[550px] h-0.5 bg-black mb-6" />
              <div className="flex-col space-y-5 md:flex-wrap md:gap-y-5  md:gap-x-0   sm:gap-y-0   text-[14px] md:text-[18px] md:space-y-8">
                <div className="md:flex text-center md:w-1/2 sm:w-auto md:items-center ">
                  <div className="space-y-2 flex flex-col items-center ">
                    <div className="flex md:items-center md:justify-center relative px-2 md:px-0  md:p-6 md:pb-4 lg:p-0 w-full">
                      
                      <div>
                        <CircularProgressWithIcon
                          value={school?.Infrastructure || 0}
                          svgSrc="/infra.svg"
                          svgAlt="Infrastructure Icon"
                        />
                      </div>

                      <div className="flex items-center justify-center absolute inset-y-0 left-14">
                        <div className="bg-gradient-to-b from-[#F1F4F9] to-[#C6D1E3] md:pl-20 md:pr-14 pl-20 pr-14 h-[65px] flex items-center rounded-r-full">
                          <p className="">Infrastructure</p>
                        </div>
                        <p
                          style={{ color: textColor }}
                          className="md:pl-4 pl-2"
                        >
                          {school?.Infrastructure &&
                            `${Math.round(school.Infrastructure)}%`}
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div className="md:flex text-center md:w-1/2 sm:w-auto items-center ">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex md:items-center md:justify-center px-2 md:px-0   relative md:p-6 md:pb-4 lg:p-0 w-full">
                      <div>
                        <CircularProgressWithIcon
                          value={school?.Administration || 0}
                          svgSrc="/administration.svg"
                          svgAlt="administration Icon"
                        />
                      </div>

                      <div className="flex items-center justify-center absolute inset-y-0 left-14">
                        <div className="bg-gradient-to-b from-[#F1F4F9] to-[#C6D1E3] md:pl-20 md:pr-12 pl-20 pr-[50px] h-[65px] flex items-center rounded-r-full">
                          <p className="">Administration</p>
                        </div>
                        <p
                          style={{ color: textColor }}
                          className="md:pl-4 pl-2"
                        >
                          {school?.Administration &&
                            `${Math.round(school.Administration)}%`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:flex text-center md:w-1/2 sm:w-auto items-center ">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex md:items-center md:justify-center px-2 md:px-0  relative md:p-6 md:pb-4 lg:p-0 w-full">
                      <div>
                        <CircularProgressWithIcon
                          value={school?.Academics || 0}
                          svgSrc="/academics.svg"
                          svgAlt="academics Icon"
                        />
                      </div>

                      <div className="flex items-center justify-center absolute inset-y-0 left-14">
                        <div className="bg-gradient-to-b from-[#F1F4F9] to-[#C6D1E3] md:pl-20 md:pr-20 pl-[90px] pr-16 h-[65px] flex items-center rounded-r-full">
                          <p className="">Academics</p>
                        </div>
                        <p
                          style={{ color: textColor }}
                          className="md:pl-4 pl-2"
                        >
                          {school?.Academics &&
                            `${Math.round(school.Academics)}%`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:flex text-center md:w-1/2 sm:w-auto items-center">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex md:items-center md:justify-center px-2 md:px-0  relative md:p-6 md:pb-4 lg:p-0 w-full">
                      <div>
                        <CircularProgressWithIcon
                          value={school?.Extracurricular || 0}
                          svgSrc="/extracur.svg"
                          svgAlt="extraextracurr Icon"
                        />
                      </div>

                      <div className="flex items-center justify-center absolute inset-y-0 left-14">
                        <div className="bg-gradient-to-b from-[#F1F4F9] to-[#C6D1E3] md:pl-20 md:pr-12 pl-[72px] pr-14 h-[65px] flex items-center rounded-r-full">
                          <p className="">Extracurricular</p>
                        </div>
                        <p
                          style={{ color: textColor }}
                          className="md:pl-4 pl-2"
                        >
                          {school?.Extracurricular &&
                            `${Math.round(school.Extracurricular)}%`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className=" hidden  sm:block rounded-t-[30px]   bg-[#F3F3F3]  ">
              <div className=" rounded-t-[30px] shadow-black   bg-[#F3F3F3]">
                <div className="w-[40px] h-[40px] ml-6">
                  <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-background-dark">
                    2
                  </p>
                </div>
                <hr className=" h-0.5 pt-[1px] bg-background-dark ml-6 mr-6 mb-16 mt-4" />
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1729853967/Go%20Edu/${city}/H-${school?.Image_Code}.png`}
                  className="w-[625px] h-[285px] mb-40"
                />
              </div>
            </section>
          </div>

          <div className="flex md:justify-center  md:space-x-20 md:sticky md:top-0 bg-white  md:h-[97vh]">
            <section className="md:w-[570px] mb-12  md:h-[750px] md:mb-[20px] md:px-0 ">
              <p className="text-[24px] ml-9 md:ml-0 sm:text-[32px] md:w-[323px] h-[54px] mt-12 md:mt-6 md:mb-6 ">
                Student Facilities
              </p>
              <hr className=" w-[300px] ml-9 md:ml-0 md:w-[550px] h-0.5 bg-black mb-6" />
              <div className="px-7 grid md:gap-4 grid-cols-3 ">
                {facility.map(
                  (facility, index) =>
                    school[`${facility.check}`] === "checked" && (
                      <div
                        key={facility.id || index}
                        className="flex flex-col  items-center space-y-3 "
                      >
                        <div className=" rounded-xl mt-3">
                          <img
                            src={facility.imageSrc}
                            alt="image"
                            className=" h-[80px] w-[110px] sm:w-[111px] sm:h-[111px] "
                          />
                        </div>
                        <p className="grid text-center place-content-center text-background-dark text-[12px] sm:text-[16px]">
                          {facility.facility}
                        </p>
                      </div>
                    )
                )}
              </div>
            </section>

            <section className=" hidden  sm:block gap-8 rounded-t-[30px] bg-[#F3F3F3] ">
              <div className=" rounded-t-[30px]  bg-[#F3F3F3]">
                <div className="w-[40px] h-[40px] ml-6">
                  <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-background-dark">
                    3
                  </p>
                </div>
                <hr className=" h-0.5 pt-[1px] bg-background-dark ml-6 mr-6 mb-16 mt-4" />
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1729853967/Go%20Edu/${city}/I-${school?.Image_Code}.png`}
                  className="w-[625px] h-[285px] mb-40"
                />
              </div>
            </section>
          </div>
        </div>

        <section className="md:sticky md:top-0 ">
          <div className="md:flex md:justify-between md:w-full  md:bg-background-dark bg-[#F3F3F3] rounded-b-[100px] md:h-[487px] h-[503px] p-12 w-full">
            <div className=" ">
              <div className="flex justify-between">
                <p className="text-[24px] sm:text-[28px] md:text-[#FFFFFF] text-[#323232] md:pb-2 pb-8">
                  Reviews
                </p>
                <div className="md:hidden">
                  <button
                    className="md:w-[223px] md:h-[40px] w-[140px] h-[36px] md:bg-background-dark md:text-white text-[#323232] rounded-2xl border md:border-white border-[#323232] ml-auto"
                    onClick={handle}
                  >
                    Write a review
                  </button>
                  <ReviewForm
                    toggle1={toggle1}
                    id={id}
                    school={school}
                    user={session?.data?.user}
                    setToggle1={setToggle1}
                  />
                </div>
              </div>
              <div className="">
                {/* <p className="text-[28px]">{school?.rating.toFixed(1)}/5</p> */}
                <StarRating
                  rating={Math.ceil(school?.rating)}
                  review={school?.numOfReviews}
                />
              </div>
            </div>
            <div className="hidden md:block">
              <button
                className="md:w-[223px] md:h-[40px] w-[125px] h-[36px] md:bg-background-dark md:text-white text-[#323232] rounded-2xl border md:border-white border-[#323232] ml-auto"
                onClick={handle}
              >
                Write a review
              </button>
              <ReviewForm
                toggle1={toggle1}
                id={id}
                school={school}
                user={session?.data?.user}
                setToggle1={setToggle1}
              />
            </div>

            <section
              className="bg-[#F3F3F3] md:hidden md:w-full md:h-auto h-[320px] w-auto md:mb-28 md:rounded-t-[100px] top-6 sticky mt-8"
              style={{ boxShadow: "0px -15px 15px 0px #0C263F40" }}
            >
              <div>
                <hr className="md:w-[520px] md:h-20 md:bg-white md:opacity-0 md:mb-6 " />
              </div>
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Navigation, Pagination]}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <ReviewCard {...review} />
                      {index % 1 === 0 && (
                        <div className="w-[2px] h-[180px] bg-[#898989] absolute top-20 hidden md:block"></div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </section>

        <div className="mx-6 md:mx-10">
          <section
            className="bg-white  hidden md:block w-full h-[300px] mb-28  rounded-t-[100px] rounded-b-[20px] sticky"
            style={{ boxShadow: "0px -15px 15px 0px #0C263F40" }}
          >
            <div>
              <hr className="w-[520px] h-20 bg-white opacity-0 mb-6 " />
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard {...review} />
                  {index % 1 === 0 && (
                    <div className="w-[2px] h-[180px] bg-[#898989] absolute top-20 "></div>
                  )}
                </SwiperSlide>
              ))}

              <Image
                src="/goeduleft.svg"
                width={1000}
                height={1000}
                alt="right"
                className="w-[50px] h-[50px] swiper-button-prev"
              />
              <Image
                src="/goeduright.svg"
                width={1000}
                height={1000}
                alt="right"
                className="w-[50px] h-[50px] swiper-button-next"
              />
            </Swiper>
          </section>
        </div>

        
      </div>
    </>
  );
};

export default SchoolDetails;
