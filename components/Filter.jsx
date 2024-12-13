import React, { useState } from "react";

export default function Filter({ filterdata, setfilterdata }) {
  const [board, setboard] = useState("");
  const [selectedBoards, setSelectedBoards] = useState([]);

  const removeBoard = (board) => {
    setSelectedBoards(selectedBoards.filter((b) => b !== board));
  };
  function handleboards(info) {
    if (!selectedBoards.includes(board)) {
      setSelectedBoards([...selectedBoards, board]);
    }

    const filter1 = filterdata?.globaldata.filter((item) => {
      return filterdata?.search?.toLowerCase() === "" || undefined || null
        ? item
        : item?.fields?.name == undefined
        ? ""
        : item?.fields?.name.toLowerCase().includes(filterdata?.search);
    });
    if (filterdata?.boards.includes(info)) {
      filterdata.boards = filterdata?.boards?.filter((item) => item !== info);
    } else {
      filterdata?.boards.push(info);
    }
    if (filterdata?.boards != 0) {
      var filter2 = filter1?.filter((item) => {
        if (filterdata?.boards.includes("cbse")) {
          if (item?.fields?.cbse_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("icse_isc")) {
          if (item?.fields?.icse_isc_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("cie")) {
          if (item?.fields?.cie_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("ib")) {
          if (item?.fields?.ib_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("igcse")) {
          if (item?.fields?.igcse_schools) {
            return item;
          }
        }
      });
    } else {
      var filter2 = filter1;
    }
    setfilterdata({
      ...filterdata,
      boards: filterdata?.boards,
      employees: filter2,
    });
  }

  function handleClassification(info) {
    const filter1 = filterdata?.globaldata.filter((item) => {
      return filterdata?.search?.toLowerCase() === "" || undefined || null
        ? item
        : item?.fields?.name == undefined
        ? ""
        : item?.fields?.name.toLowerCase().includes(filterdata?.search);
    });
    if (filterdata?.boards != 0) {
      var filter2 = filter1?.filter((item) => {
        if (filterdata?.boards.includes("cbse")) {
          if (item?.fields?.cbse_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("icse_isc")) {
          if (item?.fields?.icse_isc_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("cie")) {
          if (item?.fields?.cie_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("ib")) {
          if (item?.fields?.ib_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("igcse")) {
          if (item?.fields?.igcse_schools) {
            return item;
          }
        }
      });
    } else {
      var filter2 = filter1;
    }

    if (filterdata?.classification.includes(info)) {
      filterdata.classification = filterdata?.classification?.filter(
        (item) => item !== info
      );
    } else {
      filterdata?.classification.push(info);
    }

    if (filterdata?.classification != 0) {
      var filter3 = filter1?.filter((item) => {
        if (filterdata?.classification.includes("co-ed")) {
          if (item?.fields?.coed_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("boys")) {
          if (item?.fields?.boys_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("girls")) {
          if (item?.fields?.girls_schools) {
            return item;
          }
        }
      });
    } else {
      var filter3 = filter1;
    }

    setfilterdata({
      ...filterdata,
      classification: filterdata?.classification,
      employees: filter3,
    });
  }

  function handleType(info) {
    const filter1 = filterdata?.globaldata.filter((item) => {
      return filterdata?.search?.toLowerCase() === "" || undefined || null
        ? item
        : item?.fields?.name == undefined
        ? ""
        : item?.fields?.name.toLowerCase().includes(filterdata?.search);
    });
    if (filterdata?.boards != 0) {
      var filter2 = filter1?.filter((item) => {
        if (filterdata?.boards.includes("cbse")) {
          if (item?.fields?.cbse_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("icse_isc")) {
          if (item?.fields?.icse_isc_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("cie")) {
          if (item?.fields?.cie_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("ib")) {
          if (item?.fields?.ib_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("igcse")) {
          if (item?.fields?.igcse_schools) {
            return item;
          }
        }
      });
    } else {
      var filter2 = filter1;
    }

    if (filterdata?.classification != 0) {
      var filter3 = filter2?.filter((item) => {
        if (filterdata?.classification.includes("co-ed")) {
          if (item?.fields?.coed_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("boys")) {
          if (item?.fields?.boys_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("girls")) {
          if (item?.fields?.girls_schools) {
            return item;
          }
        }
      });
    } else {
      var filter3 = filter2;
    }

    if (filterdata?.type.includes(info)) {
      filterdata.type = filterdata?.type?.filter((item) => item !== info);
    } else {
      filterdata?.type.push(info);
    }

    if (filterdata?.type != 0) {
      var filter4 = filter3?.filter((item) => {
        if (filterdata?.type.includes("day_schools")) {
          if (item?.fields?.day_schools) {
            return item;
          }
        }
        if (filterdata?.type.includes("day_boarding_schools")) {
          if (item?.fields?.day_boarding_schools) {
            return item;
          }
        }
        if (filterdata?.type.includes("full_boarding_schools")) {
          if (item?.fields?.full_boarding_schools) {
            return item;
          }
        }
      });
    } else {
      var filter4 = filter3;
    }

    setfilterdata({
      ...filterdata,
      type: filterdata?.type,
      employees: filter4,
    });
  }

  const handleClearFilter = ()=>{
    setfilterdata({
      ...filterdata,
      classification: [],
      boards: [],
      type: [],
      employees: filterdata?.globaldata,
    })
  }

  return (
    <>
      <div className="px-5 pt-3 text-[#000000]">
        <div className=" space-y-3 sm:space-y-2 ">
          <p className="text-[22px] ">Filter</p>
          <div className=" space-y-2">
            <p className="text-[14px] mt-5 font-semibold">Sort</p>

            <div className="flex justify-between">
              <p className="text-[12px]">Popularity</p>
              <div className="flex gap-2 text-[12px]">
                <select className="bg-white text-[#7A7A7A] w-[110px] h-[28px]  focus:outline-none border-b-[1px] ">
                  <option value="top-to-bottom text-[#7A7A7A]">Select</option>
                  <option value="top-to-bottom">Top to Bottom</option>
                  <option value="bottom-to-top">Bottom to Top</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-[12px]">Price</p>
              <div className="flex gap-2 text-[12px]">
                <select className="bg-white text-[#7A7A7A] w-[110px] h-[28px]  focus:outline-none border-b-[1px] ">
                  <option value="top-to-bottom text-[#7A7A7A]">Select</option>
                  <option value="top-to-bottom">Top to Bottom</option>
                  <option value="bottom-to-top">Bottom to Top</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <p className="text-[14px] font-semibold">Fee Range</p>
          </div>
          <hr />

           <div className="space-y-3">
            <p className="text-[14px] font-semibold text-[#000000]">Boards</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px]">
              <div className="flex  justify-between pr-3 min-w-[140px]">
                <p>CBSE</p>
                <button
                  onClick={() => handleboards("cbse")}
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onChange={(e) => {
                    setboard(e.target.value);
                  }}
                >
                  {filterdata.boards.includes("cbse") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>ICSE/ISC</p>
                <button
                  onClick={() => handleboards("icse_isc")}
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onChange={(e) => {
                    setboard(e.target.value);
                  }}
                >
                  {filterdata.boards.includes("icse_isc") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>CIE</p>
                <button
                  onClick={() => handleboards("cie")}
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-md"
                >
                  {filterdata.boards.includes("cie") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>IB</p>
                <button
                  onClick={() => handleboards("ib")}
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-md"
                >
                  {filterdata.boards.includes("ib") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>IGCSE</p>
                <button
                  onClick={() => handleboards("igcse")}
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-md"
                >
                  {filterdata.boards.includes("igcse") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>  
          {/* <div className="space-y-3">
            <p className="text-[14px] font-semibold">Boards</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px]">
              <div className="flex justify-between text-[#7A7A7A] pr-3 min-w-[140px]">
                <select
                  className="bg-white text-[#7A7A7A]  w-[350px] h-[28px]  focus:outline-none border-b-[1px]"
                  onChange={(e) => handleboards(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select the BOARD
                  </option>
                  <option value="cbse">CBSE</option>
                  <option value="icse_isc">ICSE/ISC</option>
                  <option value="cie">CIE</option>
                  <option value="ib">IB</option>
                  <option value="igcse">IGCSE</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-3">
              {selectedBoards.map((board) => (
                <div
                  key={board}
                  className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-md"
                >
                  <p className="text-[12px] mr-2 text-black">
                    {board.toUpperCase()}
                  </p>
                  <button
                    onClick={() => removeBoard(board)}
                    className="text-gray-500 hover:text-black"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div> */}
          <hr />

          <div className="space-y-3">
            <p className="text-[14px] font-semibold">Classification</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px]">
              <div className="flex justify-between w-[140px] pr-3 ">
                <p>CO-ED</p>
                <button
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-sm"
                  onClick={() => handleClassification("co-ed")}
                >
                  {filterdata.classification.includes("co-ed") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-between w-[140px] pr-3">
                <p>Girls Only</p>
                <button
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-sm"
                  onClick={() => handleClassification("girls")}
                >
                  {filterdata.classification.includes("girls") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-between w-[140px] pr-3">
                <p>Boys-Only</p>
                <button
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-sm"
                  onClick={() => handleClassification("boys")}
                >
                  {filterdata.classification.includes("boys") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="space-y-3">
            <p className="text-[14px] font-semibold">Type</p>
            <div className="flex flex-wrap gap-x-3 gap-y-5 text-[12px]">
              <div className="flex justify-between min-w-[140px] pr-3">
                <p>Boarding</p>
                <button
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-sm"
                  onClick={() => handleType("full_boarding_schools")}
                >
                  {filterdata.type.includes("full_boarding_schools") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between pl-1 min-w-[140px] pr-2">
                <p>Day Boarding</p>
                <button
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-sm"
                  onClick={() => handleType("day_boarding_schools")}
                >
                  {filterdata.type.includes("day_boarding_schools") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-between  min-w-[140px] pr-3">
                <p>Day School</p>
                <button
                  className="bg-[#D9D9D9] w-[20px] h-[20px] grid place-content-center rounded-sm"
                  onClick={() => handleType("day_schools")}
                >
                  {filterdata.type.includes("day_schools") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <div className="flex justify-center items-center border rounded-3xl h-[30px] w-[259px] border-background-dark mx-auto cursor-pointer">
              <button
                onClick={() => handleClearFilter()}
                className="text-background-dark text-[12px]"
              >
                Remove All Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
