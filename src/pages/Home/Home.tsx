import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import data from "../../data/movie_data.json";
import { setFeatured, setMovies } from "../../features/movies/movieSlice";
import { RootState } from "../../app/store";
import Sidebar from "../../components/Sidebar";
import FeaturedVideo from "../../components/Featured";
import TrendingCarousel from "../../components/Trending";

const Home = () => {
  const dispatch = useDispatch();
  const featured = useSelector((state: RootState) => state.movies.featured);

  useEffect(() => {
    const trendingList = data.TendingNow || [];
    const featuredMovie = data.Featured;

    dispatch(setMovies(trendingList));
    if (!featured) dispatch(setFeatured(featuredMovie));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex min-h-screen overflow-hidden font-[tajawal]">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto gap-[9.25rem] max-md:pl-[unset] max-md:pb-[100px] pl-[9.5rem]  justify-end ">
        <FeaturedVideo />
        <TrendingCarousel />
      </div>
    </div>
  );
};

export default Home;
