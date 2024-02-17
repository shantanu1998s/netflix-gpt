import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../../utils/constant";
import { useEffect } from "react";
import { addTrailerMovies } from "../../utils/redux/moviesSlice";

const useMoviesTrailer = (id) => {
  const dispatch = useDispatch();
  const moviesTrailer= useSelector(store=>store.movies.trailerVideo)
  console.log(moviesTrailer);

  const getMovieVides = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US",
      Api_Options
    );
    const json = await data.json();
    const filterData= json.results.filter((video)=>video.type==="Teaser");
    const trailer= filterData.length?filterData[0]: json.results[0];
   
    dispatch(addTrailerMovies(trailer));
  };

  useEffect(() => {
    !moviesTrailer && getMovieVides();
  }, []);
};

export default useMoviesTrailer;
