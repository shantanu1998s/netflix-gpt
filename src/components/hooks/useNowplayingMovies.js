import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../../utils/constant";
import { addNowplayingMoviesList } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

 const useNowPlayingMovies =()=>{
    const dispatch=useDispatch();
    const nowPlaying= useSelector(store=>store.movies.nowPlayingMoviesList);
    const NowPlayingMoviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        Api_Options
      );
      const json=await data.json();
      dispatch(addNowplayingMoviesList(json.results))
    };
  
    useEffect(()=>{
      !nowPlaying && NowPlayingMoviesList();
    },[])
    
 }


 export default useNowPlayingMovies;