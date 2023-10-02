import MyProfileVideos from "../../Components/NewsFeedComponent/MyProfileVideos";
import UserOne from "../../assets/img1.png";
import UserVideo from "../../assets/eren.mp4";

const data1 = {
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
  ],
};

const MyProfile = () => {
  return (
    <div className="flex w-full flex-col">
      <div className=" flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <div className="relative my-[22px] flex w-full flex-col items-center">
            <div className=" mb-[22px] w-[85%] rounded-[10px] bg-white shadow-xl">
              <div className="p-4 ">
                <div className="avatar mb-[10px]  flex w-full flex-col items-center justify-center gap-y-2">
                  <div className="w-[80px] justify-center  rounded-full border-[3px] border-[#FF8216]">
                    <img src={UserOne} />
                  </div>
                  <p className="text-lg font-bold text-[#FF8216]">Emma Stone</p>
                  <p>@emma030</p>
                </div>

                <div className="flex flex-row items-center justify-between border-t-[2px] border-t-[#939393] p-4">
                  <div class="  cursor-pointer  items-center">
                    <p className="font-bold text-[#939393]">Followers</p>
                    <p className="text-center  text-lg font-bold text-[#FF8216]">
                      321
                    </p>
                  </div>
                  <div class="  cursor-pointer  items-center">
                    <p className="font-bold text-[#939393]">Following</p>
                    <p className="text-center  text-lg font-bold text-[#FF8216]">
                      21
                    </p>
                  </div>
                  <div class="  cursor-pointer  items-center">
                    <p className="font-bold text-[#939393]">Videos</p>
                    <p className="text-center  text-lg font-bold text-[#FF8216]">
                      3
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <MyProfileVideos data={data1} />
          </div>
        </div>

        {/* Second Column View */}

        <div className="hidden w-full sm:block sm:w-[33%] "></div>
      </div>
    </div>
  );
};

export default MyProfile;
