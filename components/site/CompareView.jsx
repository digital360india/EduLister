"use client";

import Link from "next/link";

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

// Renders one row across however many schools were passed in (1–3)
function Row({ title, schools, getValue }) {
  return (
    <tr className="border border-background-dark">
      <td className="w-72 border border-background-dark py-2 px-4 font-semibold">
        {title}
      </td>
      {schools.map((s) => {
        const value = getValue(s);
        return (
          <td
            key={s.id}
            className={`border border-background-dark w-[300px] py-2 px-4 ${
              value === "YES" ? "text-green-500" : ""
            }`}
          >
            {value || ""}
          </td>
        );
      })}
    </tr>
  );
}

function Section({ title, rows, schools }) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-[#0C263F]">{title}</h2>
      <table className="w-full border border-collapse border-background-dark">
        <tbody>
          {rows.map((r) => (
            <Row key={r.title} title={r.title} schools={schools} getValue={r.getValue} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CompareView({ schools }) {
  if (!schools || schools.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <p className="text-xs uppercase tracking-wider text-gold">Compare</p>
        <h1 className="mt-2 font-display text-4xl">Nothing to compare yet</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Head to the school listing and tap &quot;Add to Compare&quot; on up to 3 schools.
        </p>
        <Link
          href="/schools"
          className="mt-6 inline-block rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          Browse schools
        </Link>
      </div>
    );
  }

  const statsRows = [
    { title: "Type of School", getValue: getTypeOfSchool },
    { title: "Board", getValue: getBoardOfSchool },
    { title: "School Category", getValue: getCategoryOfSchool },
    { title: "Classes From", getValue: (s) => s?.classfrom || "" },
    { title: "Established In", getValue: (s) => s?.establishment || "" },
  ];

  const detailRows = [
    { title: "Principal Name", getValue: (s) => s?.principal || "" },
    { title: "Chairman Name", getValue: (s) => s?.chairman || "" },
  ];

  const feeRows = [
    { title: "Minimum Fees", getValue: (s) => s?.feefrom || "" },
    { title: "Maximum Fees", getValue: (s) => s?.feeto || "" },
  ];

  const facilityRows = [
    { title: "Online Class", getValue: (s) => checkStatus(s?.Online_Classes) },
    { title: "Photography", getValue: (s) => checkStatus(s?.Photography) },
    { title: "Robotics Lab", getValue: (s) => checkStatus(s?.Robotics_Lab) },
    { title: "Smart Class", getValue: (s) => checkStatus(s?.Smart_Classes) },
    { title: "Swimming Pool", getValue: (s) => checkStatus(s?.Swimming_Pool) },
    { title: "Tennis Court", getValue: (s) => checkStatus(s?.Tennis_Court) },
    { title: "Basketball Court", getValue: (s) => checkStatus(s?.Basketball_Court) },
    { title: "Play Ground", getValue: (s) => checkStatus(s?.Play_Ground) },
    { title: "Badminton Ground", getValue: (s) => checkStatus(s?.Badminton_Ground) },
    { title: "Indoor Games", getValue: (s) => checkStatus(s?.Indoor_Games) },
  ];

  return (
    <div className="bg-gray-100 mt-20">
      <h1 className="text-center text-background-dark text-[24px] pt-16 pb-4">
        Comparing {schools.length} school{schools.length > 1 ? "s" : ""}
      </h1>

      {/* Header row with names + location, since there's no fixed image_code style shown yet */}
      <div className="container mx-auto px-4">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `18rem repeat(${schools.length}, 300px)` }}
        >
          <div />
          {schools.map((s) => (
            <div key={s.id} className="rounded-md border border-background-dark p-3 text-center">
              {s.Image_Code && (
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1733386822/EduLister/${s.location}/H-${s.Image_Code}.png`}
                  alt={s.name}
                  className="mx-auto mb-2 h-[100px] w-full rounded object-cover"
                />
              )}
              <p className="font-semibold text-[#0C263F]">{s.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{s.location}</p>
            </div>
          ))}
        </div>
      </div>

      <Section title="Basic School Stats" rows={statsRows} schools={schools} />
      <Section title="School Details" rows={detailRows} schools={schools} />
      <Section title="Fees Structure" rows={feeRows} schools={schools} />
      <Section title="School Facilities" rows={facilityRows} schools={schools} />
    </div>
  );
}