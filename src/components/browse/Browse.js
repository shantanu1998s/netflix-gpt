import { useSelector } from "react-redux";
import Header from "../header/Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpComing()
  return (
    <div className="w-full">
      <Header />
      {
        showGptSearch?<GptSearch/>:<MainContainer/>
      }
      
    </div>
  );
};

export default Browse;
