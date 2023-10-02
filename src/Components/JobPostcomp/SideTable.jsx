import UserOne from "../../assets/img1.png";
import { useNavigate } from "react-router-dom";
import UserVideo from "../../assets/eren.mp4";

const data1 = [
  {
    img: UserOne,
    name: "Sky News",
    username: "@skynews",
    items: 60,
    follower: 212,
    following: 12,
    videos: 23,
    VideoCollection: [
      {
        vid: UserVideo,
        img: UserOne,
        descp: "If a dog chews shoes whose shoes d",
        tags: "#eren yeager #attack on titans",
        likes: 101,
        comments: 4,
        date: "23 Jan 2023",
      },
      {
        vid: UserVideo,
        img: UserOne,
        descp: "If a dog chews shoes whose shoes d",
        tags: "#eren yeager #attack on titans",
        likes: 101,
        comments: 4,
        date: "23 Jan 2023",
      },
      {
        vid: UserVideo,
        img: UserOne,
        descp: "If a dog chews shoes whose shoes d",
        tags: "#eren yeager #attack on titans",
        likes: 101,
        comments: 4,
        date: "23 Jan 2023",
      },
    ],
  },
  {
    img: UserOne,
    name: "Chor News",
    username: "@vhornews",
    items: 60,
    follower: 212,
    following: 12,
    videos: 23,
    VideoCollection: [
      {
        vid: UserVideo,
        img: UserOne,
        descp: "If a dog chews shoes whose shoes d",
        tags: "#eren yeager #attack on titans",
        likes: 101,
        comments: 4,
        date: "23 Jan 2023",
      },
      {
        vid: UserVideo,
        img: UserOne,
        descp: "If a dog chews shoes whose shoes d",
        tags: "#eren yeager #attack on titans",
        likes: 101,
        comments: 4,
        date: "23 Jan 2023",
      },
      {
        vid: UserVideo,
        img: UserOne,
        descp: "If a dog chews shoes whose shoes d",
        tags: "#eren yeager #attack on titans",
        likes: 101,
        comments: 4,
        date: "23 Jan 2023",
      },
    ],
  },
];

const SideTable = () => {
  const navigate = useNavigate();
  return (
    <div className="my-[22px] flex w-[full]  justify-between overflow-x-auto">
      <table className="w-full table-auto  text-[12px] font-normal text-text  md:text-[14px] ">
        <tbody>
          {data1.map((element) => (
            <tr>
              <td>
                <div
                  className=" mb-[20px]  flex h-[80px] cursor-pointer flex-row items-center justify-between  rounded-[20px] bg-[white]  p-4  shadow-xl hover:bg-[#EBEBEB]"
                  onClick={() =>
                    navigate(`/otherProfile`, {
                      state: element,
                    })
                  }
                >
                  <div className="avatar items-center">
                    <div className="w-[50px] rounded-full">
                      <img src={element.img} />
                    </div>
                  </div>
                  <div className="mr-[auto] px-5">
                    <p className="font-bold text-[black]">{element.name}</p>
                    <p className="text-[black]">{element.items} items</p>
                  </div>
                  <button
                    className="h-[22px] w-[100px] justify-center rounded-[10px] border-[1px]  border-[#FF8216] text-[15px] text-[black] hover:bg-[#FF8216] hover:text-white active:bg-[#FFD583]"
                    style={{ transition: "0.3s" }}
                  >
                    Follow
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SideTable;
