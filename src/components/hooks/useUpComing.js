import { useDispatch } from "react-redux";
import { Api_Options } from "../../utils/constant";
import { addUpComing } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

 const useUpComing =()=>{
    const dispatch=useDispatch();
    const upComing = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        Api_Options
      );
      const json=await data.json();
      dispatch(addUpComing(json.results))
    };
  
    useEffect(()=>{
      upComing();
    },[])
    
 }


 export default useUpComing;