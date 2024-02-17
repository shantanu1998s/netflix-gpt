import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../../utils/constant";
import { addpopularMovies } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

 const usePopularMovies =()=>{
    const dispatch=useDispatch();
    const PplrMovies= useSelector(store=>store.movies.popularMovies)
    const PopularMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        Api_Options
      );
      const json=await data.json();
      dispatch(addpopularMovies(json.results))
    };
  
    useEffect(()=>{
      !PplrMovies && PopularMovies ();
    },[])
    
 }


 export default usePopularMovies;