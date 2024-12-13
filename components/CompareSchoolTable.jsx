"use client";

const getTypeOfSchool = (school) => {
  if (!school) return "";
  const types = [];
  if (school.day_boarding_schools) types.push("Boarding");
  if (school.full_boarding_schools) types.push("Full Boarding");
  return types.join(", ") || "";
};

const getCategoryOfSchool = (school) => {
  if (!school) return "";
  const types = [];
  if (school.girls_schools) types.push("Girls");
  if (school.boys_schools) types.push("Boys");
  if (school.coed_schools) types.push("Co-Ed");
  if (school.Government) types.push("Government");
  if (school.Private) types.push("Private");
  return types.join(", ") || "";
};

const getBoardOfSchool = (school) => {
  if (!school) return "";
  const types = [];
  if (school.icse_isc_schools) types.push("ICSE ISC");
  if (school.cbse_schools) types.push("CBSE");
  if (school.cie_schools) types.push("CIE");
  if (school.ib_schools) types.push("IB");
  if (school.igcse_schools) types.push("IGCSE");
  return types.join(", ") || "";
};

const checkStatus = (status) => (status ? "YES" : "");

const renderRow = (title, data1, data2, data3, data4) => (
  <tr className="border border-background-dark">
    <td className="w-72 border border-background-dark  py-2 px-4 font-semibold">
      {title}
    </td>
    <td
      className={`border border-background-dark w-[300px] py-2 px-4 ${
        data1 === "YES" ? "text-green-500" : ""
      }`}
    >
      {data1 || ""}
    </td>
    <td
      className={`border border-background-dark w-[300px]  py-2 px-4 ${
        data2 === "YES" ? "text-green-500" : ""
      }`}
    >
      {data2 || ""}
    </td>
    <td
      className={`border border-background-dark  w-[300px]  py-2 px-4 ${
        data3 === "YES" ? "text-green-500" : ""
      }`}
    >
      {data3 || ""}
    </td>
    <td
      className={`border border-background-dark  w-[300px]  py-2 px-4 ${
        data4 === "YES" ? "text-green-500" : ""
      }`}
    >
      {data4 || ""}
    </td>
  </tr>
);

export default function CompareSchoolTable({
  schoolData1,
  schoolData2,
  schoolData3,
  schoolData4,
}) {
  return (
    <>
      <div className="container mx-auto  py-8 ">
        <h2 className="text-2xl font-bold mb-4 text-[#0C263F]">
          Basic School Stats
        </h2>
        <table className="w-full border border-collapse border-background-dark  ">
          <tbody>
            {renderRow(
              "Type of School",
              getTypeOfSchool(schoolData1),
              getTypeOfSchool(schoolData2),
              getTypeOfSchool(schoolData3),
              getTypeOfSchool(schoolData4)
            )}
            {renderRow(
              "Board",
              getBoardOfSchool(schoolData1),
              getBoardOfSchool(schoolData2),
              getBoardOfSchool(schoolData3),
              getBoardOfSchool(schoolData4)
            )}
            {renderRow(
              "School Category",
              getCategoryOfSchool(schoolData1),
              getCategoryOfSchool(schoolData2),
              getCategoryOfSchool(schoolData3),
              getCategoryOfSchool(schoolData4)
            )}
            {renderRow(
              "Classes From",
              schoolData1?.classfrom || "",
              schoolData2?.classfrom || "",
              schoolData3?.classfrom || "",
              schoolData4?.classfrom || ""
            )}
            {renderRow(
              "Established In",
              schoolData1?.establishment || "",
              schoolData2?.establishment || "",
              schoolData3?.establishment || "",
              schoolData4?.establishment || ""
            )}
          </tbody>
        </table>
      </div>

      <div className="container mx-auto  py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0C263F]">School Details</h2>
        <table className="w-full border border-collapse border-background-dark ">
          <tbody>
            {renderRow(
              "Principal Name",
              schoolData1?.principal || "",
              schoolData2?.principal || "",
              schoolData3?.principal || "",
              schoolData4?.principal || ""
            )}
            {renderRow(
              "Chairman Name",
              schoolData1?.chairman || "",
              schoolData2?.chairman || "",
              schoolData3?.chairman || "",
              schoolData4?.chairman || ""
            )}
          </tbody>
        </table>
      </div>

      <div className="container mx-auto  py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0C263F]">Fees Structure</h2>
        <table className="w-full border-collapse border-background-dark ">
          <tbody>
            {renderRow(
              "Minimum Fees",
              schoolData1?.feefrom || "",
              schoolData2?.feefrom || "",
              schoolData3?.feefrom || "",
              schoolData4?.feefrom || ""
            )}
            {renderRow(
              "Maximum Fees",
              schoolData1?.feeto || "",
              schoolData2?.feeto || "",
              schoolData3?.feeto || "",
              schoolData4?.feeto || ""
            )}
          </tbody>
        </table>
      </div>

      <div className="container mx-auto  py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0C263F]">
          School Facilities
        </h2>
        <table className="w-full border border-collapse border-background-dark ">
          <tbody>
            {renderRow(
              "Online Class",
              checkStatus(schoolData1?.Online_Classes),
              checkStatus(schoolData2?.Online_Classes),
              checkStatus(schoolData3?.Online_Classes),
              checkStatus(schoolData4?.Online_Classes)
            )}
            {renderRow(
              "Photography",
              checkStatus(schoolData1?.Photography),
              checkStatus(schoolData2?.Photography),
              checkStatus(schoolData3?.Photography),
              checkStatus(schoolData4?.Photography)
            )}
            {renderRow(
              "Robotics Lab",
              checkStatus(schoolData1?.Robotics_Lab),
              checkStatus(schoolData2?.Robotics_Lab),
              checkStatus(schoolData3?.Robotics_Lab),
              checkStatus(schoolData4?.Robotics_Lab)
            )}
            {renderRow(
              "Smart Class",
              checkStatus(schoolData1?.Smart_Classes),
              checkStatus(schoolData2?.Smart_Classes),
              checkStatus(schoolData3?.Smart_Classes),
              checkStatus(schoolData4?.Smart_Classes)
            )}
            {renderRow(
              "Swimming Pool",
              checkStatus(schoolData1?.Swimming_Pool),
              checkStatus(schoolData2?.Swimming_Pool),
              checkStatus(schoolData3?.Swimming_Pool),
              checkStatus(schoolData4?.Swimming_Pool)
            )}
            {renderRow(
              "Tennis Court",
              checkStatus(schoolData1?.Tennis_Court),
              checkStatus(schoolData2?.Tennis_Court),
              checkStatus(schoolData3?.Tennis_Court),
              checkStatus(schoolData4?.Tennis_Court)
            )}
            {renderRow(
              "Basketball Court",
              checkStatus(schoolData1?.Basketball_Court),
              checkStatus(schoolData2?.Basketball_Court),
              checkStatus(schoolData3?.Basketball_Court),
              checkStatus(schoolData4?.Basketball_Court)
            )}
            {renderRow(
              "Play Ground",
              checkStatus(schoolData1?.Play_Ground),
              checkStatus(schoolData2?.Play_Ground),
              checkStatus(schoolData3?.Play_Ground),
              checkStatus(schoolData4?.Play_Ground)
            )}
            {renderRow(
              "Badminton Ground",
              checkStatus(schoolData1?.Badminton_Ground),
              checkStatus(schoolData2?.Badminton_Ground),
              checkStatus(schoolData3?.Badminton_Ground),
              checkStatus(schoolData4?.Badminton_Ground)
            )}
            {renderRow(
              "Indoor Games",
              checkStatus(schoolData1?.Indoor_Games),
              checkStatus(schoolData2?.Indoor_Games),
              checkStatus(schoolData3?.Indoor_Games),
              checkStatus(schoolData4?.Indoor_Games)
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
