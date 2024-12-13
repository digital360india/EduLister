import React from "react";

export default function Hero() {
  return (
    <div
      className="w-[100vw] h-[40vh] md:h-[60vh] lg:h-[80vh] mx-auto px-5 relative bg-center bg-cover bg-no-repeat flex justify-start items-center
        bg-[url('https://res.cloudinary.com/eduminatti-com/image/upload/v1725877210/Edu123/Eduimages/landingsmall.png')] 
        lg:bg-[url('https://res.cloudinary.com/eduminatti-com/image/upload/v1726549924/Edu123/Eduimages/background_student_assessment.png')] 
       "
    >
      <div className="w-[80vw] md:w-[400px] h-fit my-auto flex flex-col justify-start items-center">
        <p className="text-[#02618f] text-[36px] md:text-[64px] font-semibold">
          Student Assessment Test
        </p>
      </div>
    </div>
  );
}
