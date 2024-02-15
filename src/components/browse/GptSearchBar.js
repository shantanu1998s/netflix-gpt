import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { Api_Options} from "../../utils/constant";
import { addGptMovieResult } from "../../utils/redux/gptSlice";

const GptSearchBar = () => {
  const selectLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const disptch=useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1",
      Api_Options
    );
   
    const json= await data.json();
   

    return json.results;

  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    console.log(searchText.current.value);
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given aheaad. Example result: gadar,sholay,Don, Golmaal, koi mil gaya";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    

    if (!chatCompletion.choices) {
    }

    const gptMovies = chatCompletion?.choices[0]?.message?.content.split(',');
    

    const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie));
    
    const tmdbResults= await Promise.all(promiseArray);

    disptch(addGptMovieResult({movieResults:tmdbResults, movieNames:gptMovies}));
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 bg-black grid-cols-12 flex ">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-2 w-[90%] "
          placeholder={lang[selectLang].gptSearchPlaceholder}
        />
        <button
          className=" w-[20%] m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
