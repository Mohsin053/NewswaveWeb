import UserOne from "../../assets/img1.png";
import { useNavigate } from "react-router-dom";

const data1 = [
  {
    img: UserOne,
    name: "Sky News",
    userName: "@SkyNews",
    date: "23 jan 2023",
    postedOn: "23 jan 2023",
    descp: "Need live coverage of forest fires happening in pune",
    price: "50$",
    bidders: [
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
      {
        img: UserOne,
        descp: "Accident karachi",
        yourOffer: "50$",
        recentOffer: "90$",
        timeLeft: "3h 23m",
      },
    ],
  },
];

const ForYou = () => {
  const navigate = useNavigate();
  return (
    <div>
      {data1.map((element) => (
        <div className="my-[15px] flex  w-full flex-row flex-wrap  rounded-xl border-[2px]">
          <div className=" mb-[10px]  flex h-[80px] w-full  flex-row items-center justify-between rounded-xl  bg-[white] p-4 ">
            <div className="avatar items-center">
              <div className="w-[50px] rounded-full">
                <img src={UserOne} />
              </div>
            </div>

            <div className="mr-[auto]  px-5">
              <p className="text-[14px] font-bold text-[black] sm:text-[24px]">
                {element.name}
              </p>
            </div>

            <button
              className="ml-[auto] h-[22px] w-[80px] justify-center rounded-[10px] bg-[#FF8216]  text-[15px]   text-white hover:bg-[#F7A541] active:bg-[#FFD583] sm:h-[35px] sm:w-[150px]"
              style={{ transition: "0.3s" }}
              onClick={() =>
                navigate(`/JobDetails`, {
                  state: element,
                })
              }
            >
              Go
            </button>
          </div>

          <div className="mb-[20px]  flex w-full flex-row justify-between rounded-xl bg-[white] px-4">
            <div>
              <p className="text-[14px] text-[black] ">{element.descp}</p>
              <p className="text-[12px] text-[black]">{element.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForYou;
