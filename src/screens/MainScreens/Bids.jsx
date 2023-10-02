import { useNavigate } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import UserOne from "../../assets/img1.png";
import Uservideo from "../../assets/eren.mp4";

{
  /*imported components */
}
import BidsModal from "../../Components/BidComp/BidsModal";
import TrendingBidCards from "../../Components/BidComp/TrendingBidCards";
import TopCreators from "../../Components/BidComp/TopCreators";
import ActiveBidsTable from "../../Components/BidComp/ActiveBidsTable";

const TopCardsdata = [
  {
    color: "#6F4FF2",
    num: "24K",
    descp: "Exclusive",
  },
  {
    color: "#F9D62C",
    num: "200",
    descp: "Creators",
  },
  {
    color: "#DC3546",
    num: "89",
    descp: "Interests",
  },
];

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

const data1 = [
  {
    img: UserOne,
    descp: "Accident karachi",
    yourOffer: "50$",
    recentOffer: "90$",
    timeLeft: "3h 23m",
  },
  {
    img: UserOne,
    descp: "Accident karachi",
    yourOffer: "50$",
    recentOffer: "90$",
    timeLeft: "3h 23m",
  },
  {
    img: UserOne,
    descp: "Accident karachi",
    yourOffer: "50$",
    recentOffer: "90$",
    timeLeft: "3h 23m",
  },
];

const handleModal = async () => {
  document.getElementById("my_modal").showModal();
};

const Bids = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col">
      {/* Top Area */}
      <div className="flex w-full flex-col justify-between">
        <h1 className="text-[20px] font-bold">Bids</h1>
        <p>Welcome to bidding Page</p>
      </div>

      {/* top three cards */}
      <div className="flex w-full flex-row flex-wrap justify-between gap-y-4 py-5 ">
        {TopCardsdata.map((element) => (
          <div className="flex w-full flex-row items-center justify-between rounded-[20px] bg-white p-4 shadow-xl sm:w-[300px]">
            <div
              className={`bg-{&} flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FF8216]`}
            >
              <MdEditDocument size={30} color="#FFF" />
            </div>
            <div className="mr-auto px-10">
              <p className="text-24 font-bold text-black">{element.num}</p>
              <p className="text-black">{element.descp}</p>
            </div>
          </div>
        ))}
      </div>

      {/*Heading */}
      <div className="my-[22px] flex flex-row items-center justify-between">
        <h1 className="text-[20px] font-bold">Trending Bids</h1>
        <button
          className="h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216] text-[15px]  text-white hover:bg-[#F7A541] active:bg-[#FFD583]"
          style={{ transition: "0.3s" }}
          onClick={() => navigate(`/trendingsBids`)}
        >
          See All
        </button>
      </div>

      {/*Trending Bids Card */}
      <div className="my-[22px] flex w-full  flex-row flex-wrap justify-between gap-y-4">
        <TrendingBidCards data={data} />
      </div>

      {/*Heading */}
      <div className="my-[22px] flex flex-row items-center justify-between">
        <h1 className="text-[20px] font-bold">Active Bids</h1>
        <button
          className="h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216] text-[15px]  text-white hover:bg-[#F7A541] active:bg-[#FFD583]"
          style={{ transition: "0.3s" }}
          onClick={() =>
            navigate(`/activeBids`, {
              state: data1,
            })
          }
        >
          See All
        </button>
      </div>

      {/*Active Bids Table*/}
      <div className="my-[22px] w-[full] overflow-x-auto">
        <ActiveBidsTable data={data1} />
      </div>

      {/*Heading */}
      <div className="my-[22px] flex flex-row items-center justify-between">
        <h1 className="text-[20px] font-bold">Top Creators</h1>
        <button
          className="h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216] text-[15px]  text-white hover:bg-[#F7A541] active:bg-[#FFD583]"
          style={{ transition: "0.3s" }}
          onClick={handleModal}
        >
          See All
        </button>
      </div>

      {/*Top creators List */}
      <div className="my-[22px] flex w-[full]  flex-row  justify-between overflow-x-auto">
        <TopCreators num1={0} num2={3} />

        <TopCreators num1={3} num2={6} />
      </div>

      {/*Modal */}
      <BidsModal showmodal={handleModal} />
    </div>
  );
};

export default Bids;
