 
import React from "react";

import Card from "./Card";
import NewCarl from "./NewCarl";

const School = [
  {
    school: "Jain International School",
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253096/Edu123/Eduimages/Jain_International_School.png",
    url: "/school/bangalore/jain-international-residential-school-bangalore-karnataka",
  },
  {
    school: "Wellham Girls School",
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253097/Edu123/Eduimages/Welham_Girls_School.png",
    url: "/school/dehradun/welham-girls'-school-dehradun-uttarakhand",
  },
  {
    school: "Mayo College",
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253096/Edu123/Eduimages/Mayo_College.png",
    url: "/school/india/mayo-college-india",
  },
  {
    school: "Mussoorie International School",
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253096/Edu123/Eduimages/Mussoorie_International_School.png",
    url: "/school/mussoorie/mussoorie-international-school-mussoorie-uttarakhand ",
  },
  {
    school: "The Doon School",
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253097/Edu123/Eduimages/The_Doon_School.png",
    url: "/school/dehradun/the-doon-school-dehradun-uttarakhand",
  },
];

export const FeatureSchool = () => {
 

  return (
    <>
      <div className="mb-[20px] md:mb-[80px]">
        <p className=" text-[24px] sm:text-[28px] font-semibold mb-[40px]">
          Featured Schools
        </p>
        <div className="hidden  md:flex overflow-scroll scroll-hidden xl:overflow-auto justify-between w-[83vw] h-[25vh] xl:h-[30vh] gap-8 lg:gap-7 xl:justify-between">
          {School.map((card, index) => (
            <Card
              key={index}
              logo={card.img}
              text={card.school}
              url={card.url}
            />
          ))}
        </div>

        <div className=" md:hidden relative ">
         
          <NewCarl data={School}/>
        </div>
      </div>
    </>
  );
};
