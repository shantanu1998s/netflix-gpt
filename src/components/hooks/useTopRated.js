import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../../utils/constant";
import { addTopRated } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

 const useTopRated =()=>{
    const dispatch=useDispatch();
    const topRatedMovies= useSelector(store=>store.movies.topRated);
    const topRated = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        Api_Options
      );
      const json=await data.json();
      dispatch(addTopRated(json.results))
    };
  
    useEffect(()=>{
     !topRatedMovies && topRated ();
    },[])
    
 }


 export default useTopRated;