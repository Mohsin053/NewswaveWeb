import { IoTrashOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import Heading from "../../Components/Heading";

const JobDetails = () => {
  const { state } = useLocation();

  return (
    <div className="flex w-full flex-col">
      {/* Top Area */}
      <div className="flex w-full flex-col justify-between">
        <h1 className="text-[20px] font-bold">Job Details</h1>
      </div>

      {/* Description Card */}
      <div className="my-[22px] flex  w-full flex-row flex-wrap  rounded-xl bg-[white] shadow-xl ">
        <div className=" mb-[10px]  flex h-[80px] w-full  flex-row items-center justify-between rounded-xl  bg-[white] p-4 ">
          <div className="avatar items-center">
            <div className="w-[50px] rounded-full">
              <img src={state.img} />
            </div>
          </div>

          <div className="mr-[auto]  px-5">
            <p className="text-[14px] font-bold text-[black] sm:text-[24px]">
              {state.name}{" "}
              <span className="ml-[10px] text-[12px] text-[black]">
                {state.userName}
              </span>
            </p>
            <p className="text-[12px] text-[black]">{state.date}</p>
          </div>

          {/* Buttons */}
          <div className=" ml-[auto] flex flex-row items-center justify-between ">
            <button
              className="mx-[10px] h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216]  text-[15px]  text-white hover:bg-[#F7A541] active:bg-[#FFD583] sm:h-[35px] sm:w-[200px]"
              style={{ transition: "0.3s" }}
            >
              Stop Requests
            </button>
            <button
              className="h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216]  text-[15px]   text-white hover:bg-[#F7A541] active:bg-[#FFD583] sm:h-[35px] sm:w-[200px]"
              style={{ transition: "0.3s" }}
            >
              Delete Job
            </button>
          </div>
        </div>

        <div className="mb-[20px]  flex w-full flex-row justify-between rounded-xl bg-[white] px-4">
          <div>
            <p className="text-[14px] text-[black] ">{state.descp}</p>
            <p className="text-[12px] text-[black]">
              Posted On: <span>{state.postedOn}</span>
            </p>
          </div>
          <div>
            <p className="text-center text-[24px] font-bold text-[black]">
              {state.price}
            </p>
          </div>
        </div>
      </div>

      {/*Heading */}
      <Heading text={"Job Candidates"} />

      {/* Job Candidates Table */}
      <div className="my-[22px] w-[full] overflow-x-auto">
        <table className="w-full table-auto rounded-xl bg-[white] text-[12px] font-normal text-text  md:text-[14px]">
          <thead>
            <tr className="border-b-[3px] border-[#E4E4E4]">
              <th className="pb-[8px] pl-4 pt-[18px] text-left">Content</th>
              <th className="pb-[8px] pt-[18px] text-left">Description</th>
              <th className="pb-[8px] pt-[18px] text-left">Ratings</th>
              <th className="pb-[8px] pt-[18px] text-left">Offer</th>
              <th className="pb-[8px] pt-[18px] text-left">
                <p className="pr-1">Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {state.bidders.map((element) => (
              <tr className="my-[10px] cursor-pointer  rounded-xl bg-white hover:bg-[#EBEBEB]">
                <td className="pl-3">
                  <div className="py-2 ">
                    <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full">
                      <img src={element.img} />
                    </div>
                  </div>
                </td>
                <td className="font-medium">
                  <p>{element.descp}</p>
                </td>
                <td className="font-medium">
                  <p className="pr-1">{element.yourOffer}</p>
                </td>
                <td className="hidden font-medium md:table-cell">
                  <p className="pr-1">{element.recentOffer}</p>
                </td>
                <td>
                  <div className="justify-center">
                    <IoTrashOutline
                      size={19}
                      color="#48525B"
                      onClick={() => alert("Delete")}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetails;
