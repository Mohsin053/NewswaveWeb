import MyProfileVideos from "../../Components/NewsFeedComponent/MyProfileVideos";
import { useLocation } from "react-router-dom";

const OthersProfile = () => {
  const { state } = useLocation();

  return (
    <div className="flex w-full flex-col">
      <div className=" flex flex-wrap justify-between">
        {/*First Column View */}
        <div className="w-full sm:w-[65%]">
          <div className="relative my-[22px] flex w-full flex-col items-center">
            <div className=" mb-[22px] w-[85%] rounded-[10px] bg-white shadow-xl">
              <div className="p-4 ">
                <div className="avatar mb-[10px]  flex w-full flex-col items-center justify-center gap-y-2">
                  <div className="w-[80px] justify-center  rounded-full border-[3px] border-[#FF8216]">
                    <img src={state.img} />
                  </div>
                  <p className="text-lg font-bold text-[#FF8216]">
                    {state.name}
                  </p>
                  <p>{state.username}</p>
                </div>

                <div className="flex flex-row items-center justify-between border-t-[2px] border-t-[#939393] p-4">
                  <div class="  cursor-pointer  items-center">
                    <p className="font-bold text-[#939393]">Followers</p>
                    <p className="text-center  text-lg font-bold text-[#FF8216]">
                      {state.follower}
                    </p>
                  </div>
                  <div class="  cursor-pointer  items-center">
                    <p className="font-bold text-[#939393]">Following</p>
                    <p className="text-center  text-lg font-bold text-[#FF8216]">
                      {state.following}
                    </p>
                  </div>
                  <div class="  cursor-pointer  items-center">
                    <p className="font-bold text-[#939393]">Videos</p>
                    <p className="text-center  text-lg font-bold text-[#FF8216]">
                      {state.videos}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center  justify-center p-4">
                  <div class="items-center ">
                    <button
                      className="mx-[10px] h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216]  text-[15px]  text-white hover:bg-[#F7A541] active:bg-[#FFD583] sm:h-[35px] sm:w-[200px]"
                      style={{ transition: "0.3s" }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*IMported Component */}
            <MyProfileVideos data={state} />
          </div>
        </div>

        {/* Second Column View */}

        <div className="hidden w-full sm:block sm:w-[33%] "></div>
      </div>
    </div>
  );
};

export default OthersProfile;
