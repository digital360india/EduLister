"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { base } from "@/app/api/airtable";

async function getSchoolsByLocation(location) {
  console.log(location);
  if (!location) return [];
  const schoolData = await base(location).select({}).all();
  return schoolData.map((record) => record.fields);
}

async function getSchoolsBySchoolName(school, location) {
  console.log(`Fetching school: ${school} in location: ${location}`);
  if (!school || !location) return [];
  try {
    const schoolData = await base(location)
      .select({
        filterByFormula: `{name} = "${school}"`,
      })
      .all();

    return schoolData.map((record) => record.fields);
  } catch (error) {
    console.error(`Error fetching school by name: ${error}`);
    return [];
  }
}

const CompareSchoolCard = ({ onSchoolDataFetched }) => {
  const [location, setLocation] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schools, setSchools] = useState([]);
  const [schooldetail, setSchooldetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        console.log(location);
        const data = await getSchoolsByLocation(location);
        setSchools(data);
        setSchoolName("");
      }
    };
    fetchData();
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      if (location && schoolName) {
        console.log(location, schoolName);
        const data = await getSchoolsBySchoolName(schoolName, location);
        console.log("School Data:", data);
        setSchooldetail(data[0]);
        onSchoolDataFetched(data[0]);
      }
    };
    fetchData();
  }, [location, schoolName]);

  const handleCancel = () => {
    setLocation("");
    setSchoolName("");
    setSchools([]);
    setSchooldetail([]);
  };

  return (
    <>
      {schooldetail == "" ? (
        <div className="rounded px-3 p-2 space-y-3 border-r border-background-dark last:border-none">
          <div className="flex justify-center">
            <div className="  flex items-center justify-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#02618f60"
                  d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v112.4l-32.89-32.89a12 12 0 0 0-17 0l-22.83 22.83l-46.82-46.83a12 12 0 0 0-17 0L36 159V56a4 4 0 0 1 4-4m-4 148v-29.66l53.17-53.17a4 4 0 0 1 5.66 0L181.66 204H40a4 4 0 0 1-4-4m180 4h-23l-40-40l22.83-22.83a4 4 0 0 1 5.66 0L220 179.71V200a4 4 0 0 1-4 4m-68-104a8 8 0 1 1 8 8a8 8 0 0 1-8-8"
                />
              </svg> */}

              <Image
                src="/school-building.svg"
                alt="Add Image"
                width={1000}
                height={1000}
                className="w-[210px] h-[140px]"
                />
            </div>
          </div>
          <h3 className="text-center text-background-dark">Add school</h3>
          <div className="space-y-2">
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 text-background-dark bg-white border border-background-dark rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#B8BBC2]"
              >
                <option value="">Location</option>
                <option value="dehradun">Dehradun</option>
                <option value="mussoorie">Mussoorie</option>
                <option value="shimla">Shimla</option>
                <option value="bangalore">bangalore</option>
                <option value="india">India</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="mumbai">Mumbai</option>
                <option value="faridabad">Faridabad</option>
                <option value="nainital">Nainital</option>
                <option value="varanasi">Varanasi</option>
                <option value="kolkata">Kolkata</option>
                <option value="udaipur">Udaipur</option>
                <option value="jaipur">Jaipur</option>
                <option value="panchgani">Panchgani</option>
                <option value="sikar">Sikar</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="delhi">Delhi</option>
                <option value="darjeeling">Darjeeling</option>
                <option value="ajmer">Ajmer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-background-dark">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full px-3 py-2 text-background-dark bg-white border border-background-dark rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#B8BBC2]"
                disabled={!location}
              >
                <option value="">School Name</option>
                {schools.map((school, index) => (
                  <option key={index} value={school.name}>
                    {school.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#7A7A7A]">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded px-3 p-4 space-y-6 border-r border-background-dark  last:border-none">
          <div className="flex justify-center">
            <div className="relative mt-4 w-full h-[170px] flex items-center justify-center">
              <img
                src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${location}/H-${schooldetail.Image_Code}.png`}
                className="w-full h-[160px] rounded-md border p-2"
              />
              <button
                onClick={handleCancel}
                className="absolute top-0 right-0  bg-background-dark text-white hover:text-[#02618f] rounded-full p-1 hover:bg-background-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-center text-[#0C263F] font-semibold">
              {schooldetail.name}
            </p>
            <div className="flex justify-center pb-3 sm:pb-0">
              <button className="px-4 py-2 bg-background-dark sm:mb-4 text-white rounded hover:bg-background-light">
                View School
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompareSchoolCard;
