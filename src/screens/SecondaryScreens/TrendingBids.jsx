import UserOne from "../../assets/img1.png";
import Uservideo from "../../assets/eren.mp4";
import TrendingBidCards from "../../Components/BidComp/TrendingBidCards";

const data = [
  {
    video: Uservideo,
    img: UserOne,
    name: "Emma Stone",
    username: "@emma030",
    date: "21 Jan 2023",
    descp: "Accident in karachi",
    capturedOn: "21 Jan 2023 5:41 pm",
    city: "Islamabad",
    country: "Pakistan",
    category: "None",
    videoRatio: "16:9",
    time: "3h 10m",
    bid: "10$",
  },
  {
    video: Uservideo,
    img: UserOne,
    name: "Emma Stone",
    username: "@emma030",
    date: "21 Jan 2023",
    descp: "Accident in karachi",
    capturedOn: "21 Jan 2023 5:41 pm",
    city: "Islamabad",
    country: "Pakistan",
    category: "None",
    videoRatio: "16:9",
    time: "3h 10m",
    bid: "10$",
  },
  {
    video: Uservideo,
    img: UserOne,
    name: "Emma Stone",
    username: "@emma030",
    date: "21 Jan 2023",
    descp: "Accident in karachi",
    capturedOn: "21 Jan 2023 5:41 pm",
    city: "Islamabad",
    country: "Pakistan",
    category: "None",
    videoRatio: "16:9",
    time: "3h 10m",
    bid: "10$",
  },
  {
    video: Uservideo,
    img: UserOne,
    name: "Emma Stone",
    username: "@emma030",
    date: "21 Jan 2023",
    descp: "Accident in karachi",
    capturedOn: "21 Jan 2023 5:41 pm",
    city: "Islamabad",
    country: "Pakistan",
    category: "None",
    videoRatio: "16:9",
    time: "3h 10m",
    bid: "10$",
  },
];

const TrendingBids = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Top Area */}
      <div className="flex w-full flex-col justify-between">
        <h1 className="text-[20px] font-bold"> Active Bids</h1>
        <p>Welcome to bidding Page</p>
      </div>

      {/* Cards Area */}
      <div className="my-[22px] flex w-full  flex-row flex-wrap gap-3 gap-3">
        <TrendingBidCards data={data} />
      </div>
    </div>
  );
};

export default TrendingBids;
