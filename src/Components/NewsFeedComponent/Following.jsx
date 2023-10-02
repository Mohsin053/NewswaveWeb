import UserOne from "../../assets/img1.png";
import UserVideo from "../../assets/eren.mp4";
import { IoHeart, IoChatbubble, IoDownload } from "react-icons/io5";

const data1 = [
  {
    name: "Chor News",
    username: "@vhornews",
    items: 60,
    follower: 212,
    following: 12,
    videos: 23,
    vid: UserVideo,
    img: UserOne,
    descp: "If a dog chews shoes whose shoes d",
    tags: "#eren yeager #attack on titans",
    likes: 101,
    comments: 4,
    date: "2 Jan 2023",
  },
];

const Following = () => {
  return (
    <>
      {data1.map((element) => (
        <div className="card card-compact mb-[22px] w-[85%] bg-white shadow-xl">
          <video
            className="h-[300px] w-full rounded-xl  bg-[white] "
            controls
            controlsList="nodownload"
            muted
            autoPlay
          >
            <source src={element.vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="card-body">
            <div className="flex flex-row items-center ">
              <div className="avatar items-center">
                <div className="w-[50px] rounded-full">
                  <img src={element.img} />
                </div>
              </div>

              <div className="mr-[auto]  px-5">
                <p className="text-[14px] font-bold text-[black] ">
                  {element.name}
                  <span className="ml-[10px] text-[12px] text-[black]">
                    {element.username}
                  </span>
                </p>
                <p className="text-[12px] text-[black]">{element.date}</p>
              </div>
            </div>
            <p className="font-semibold">{element.descp}</p>
            <p className="font-semibold text-[#FF8216]">{element.tags}</p>
            <div className="card-actions items-center justify-between">
              <div class="my-2 flex items-center">
                <div class="mr-5 flex cursor-pointer flex-row ">
                  <IoHeart size={24} color="#939393" />
                  <p>{element.likes}</p>
                </div>
                <div class="flex cursor-pointer flex-row ">
                  <IoChatbubble size={24} color="#939393" />
                  <p>{element.comments}</p>
                </div>
              </div>

              <div class="my-2 flex cursor-pointer items-center  ">
                <div class="mr-2 flex flex-row">
                  <IoDownload size={24} color="#939393" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Following;
