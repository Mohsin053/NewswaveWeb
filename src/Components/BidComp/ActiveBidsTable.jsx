import React from "react";
import { IoTrashOutline } from "react-icons/io5";

const ActiveBidsTable = (props) => {
  const { data } = props;
  return (
    <table className="w-full table-auto rounded-xl bg-white text-[12px] font-normal text-text shadow-xl md:text-[14px]">
      <thead>
        <tr className="border-b-[3px] border-[#E4E4E4] ">
          <th className="pb-[8px] pl-4 pt-[18px] text-left">Content</th>
          <th className="pb-[8px] pt-[18px] text-left">Description</th>
          <th className="pb-[8px] pt-[18px] text-left">Your Offer</th>
          <th className="hidden pb-[8px] pt-[18px] text-left md:block">
            Recent Offer
          </th>
          <th className="pb-[8px] pt-[18px] text-left">
            <p className="pr-1">Time Left</p>
          </th>
          <th className="pb-[8px] pt-[18px] text-left">
            <p className="pr-1">Actions</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((element) => (
          <tr className="cursor-pointer rounded-xl border-b-[1px] border-[#E4E4E4] bg-white hover:bg-[#EBEBEB]">
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
            <td className="font-medium">
              <p className="pr-1">{element.timeLeft}</p>
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
  );
};

export default ActiveBidsTable;
