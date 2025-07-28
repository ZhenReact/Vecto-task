import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const FeaturedVideo = () => {
  const featured = useSelector((state: RootState) => state.movies.featured);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(false);
    if (featured?.VideoUrl) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [featured]);

  if (!featured) return null;
 
  return (
    <section className=" z-10 text-white overflow-hidden justify-content: end;">
      <div className="absolute w-full h-full top-0 bg-[#040404]">
        {!showVideo ? (
          <img
            src={`assets/movies/${featured.CoverImage}`}
            alt="Featured"
            className="absolute top-0 left-0 w-full h-full z-[0]"
          />
        ) : (
          <video
            src={featured.VideoUrl}
            className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="pl-4  mt-[11.25rem] relative">
          <p className="text-[#858688] uppercase text-[1rem] lg:text-[1.7vw] font-semibold">
            {featured.Category}
          </p>

          <img
            src={`assets/movies/${featured.TitleImage}`}
            alt=""
            className="w-60 lg:w-80 xl:w-auto"
          />

          <div className="my-2 flex gap-4 text-[1rem] lg:text-[1.7vw]">
            <span>{featured.ReleaseYear}</span>
            <span>{featured.MpaRating}</span>
            <span>{featured.Duration}</span>
          </div>

          <p className="max-w-xl text-[1rem] lg:text-[1.7vw]">
            {featured.Description}
          </p>

          <div className="mt-6 flex gap-4">
            <Button
              size="large"
              className="h-[60px] lg:min-w-[240px] px-8 lg:h-[72px] rounded-[2.5rem] bg-[#F1F1F1] font-bold text-black border-none hover:bg-gray-200 text-[1.25rem] lg:text-[2rem] leading-[1.875rem]"
            >
              <CaretRightOutlined /> Play
            </Button>
            <Button
              type="primary"
              size="large"
              className="h-[60px] lg:min-w-[240px] px-8 lg:h-[72px] text-[1.25rem] lg:text-[2rem] leading-[30px] font-semibold tracking-[-0.32px] rounded-[40px] bg-gradient-to-br from-[#2727F5] to-[#001671] text-white border-none hover:brightness-110"
            >
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
