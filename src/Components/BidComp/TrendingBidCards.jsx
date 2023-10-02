import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingBidCards = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  return (
    <>
      {data.map((element) => (
        <div className="card w-full bg-white shadow-xl sm:w-[24%] ">
          <figure className="px-10 pt-10">
            <img
              src={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              }
              alt="Shoes"
              className="rounded-xl "
            />
          </figure>
          <div className="card-body border-[black]">
            <h2 className="card-title">{element.descp}</h2>
            <div className="flex flex-row justify-between">
              <p className="text-[14px]">Auction time</p>
              <p className="text-[14px]">Current Bid</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>{element.time}</p>
              <p className="text-[#FF8216]">{element.bid}</p>
            </div>
            <div className="card-actions">
              <button
                className="btn w-full bg-[#FF8216] font-bold text-[white]"
                onClick={() =>
                  navigate(`/contentDetails`, {
                    state: element,
                  })
                }
              >
                Place a Bid
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingBidCards;
