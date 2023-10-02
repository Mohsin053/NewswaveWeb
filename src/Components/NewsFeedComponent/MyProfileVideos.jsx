import {
  IoHeart,
  IoChatbubble,
  IoDownload,
  IoEllipsisHorizontal,
} from "react-icons/io5";

const MyProfileVideos = ({ data }) => {
  return (
    <>
      {data.VideoCollection.map((element) => (
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
                  {data.name}
                  <span className="ml-[10px] text-[12px] text-[black]">
                    {data.username}
                  </span>
                </p>
                <p className="text-[12px] text-[black]">{element.date}</p>
              </div>

              <div className="ml-[auto] cursor-pointer">
                <IoEllipsisHorizontal size={30} color="#939393" />
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

export default MyProfileVideos;
