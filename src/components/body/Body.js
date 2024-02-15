import { BG_URL } from "../../utils/constant";
import Login from "../Login/Login";
import Header from "../header/Header";


const Body = () => {
 
 
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <img
          className="object-cover w-full h-full"
          alt="Not Found"
          src={BG_URL}
        />
      </div>
      <div className=" absolute flex justify-center items-center w-full h-full">
        <Login />
      </div>
    </div>
  );
};

export default Body;
