import Header from "../header/Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";


const Browse = () => {
    useNowPlayingMovies();
  return (
    <div className="w-full">
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browse;
