import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setFeatured } from "../../features/movies/movieSlice";

const TrendingCarousel = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state: RootState) => state.movies.trending);

  const sortedTrending = [...trending]
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    .slice(0, 50);

  const handleClick = (movie: any) => {
    dispatch(setFeatured(movie));
  };

  return (
    <section className="pl-4 mt-10 text-white z-[10]">
      <h3 className="mb-4 text-[1rem] lg:text-[1.7vw] ">Trending Now</h3>
      <div
        className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hidden cursor-pointer"
        style={{ scrollbarWidth: "none" }}
      >
        {sortedTrending.map((movie) => (
          <img
            key={movie.Id}
            src={`assets/movies/${movie.CoverImage}`}
            alt={movie.Title}
            className="min-w-[33.3333%] w-[33.3333%] sm:min-w-[25%] sm:w-[25%] md:min-w-[20%] md:w-[20%] lg:min-w-[16.6667%] lg:w-[16.6667%] xl:min-w-[14.2857%] xl:w-[14.2857%]  2xl:min-w-[12.5%] 2xl:w-[12.5%]  aspect-[2/3] h-auto object-none  rounded-lg hover:scale-105 transition duration-300"
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingCarousel;
