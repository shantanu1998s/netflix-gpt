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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <div className=" absolute flex justify-center items-center w-full h-full">
        <Login />
      </div>
    </div>
  );
};

export default Body;
