import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import { useNavigate } from "react-router";
import { toggleGptSearchView } from "../../utils/redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { changeLanguage } from "../../utils/redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        console.log("i a insid");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed h-14 w-full bg-gradient-to-b from-black  flex flex-col md:flex-row md:justify-between z-30">
      <div className="flex">
        <img
          className="w-44 left-24 top-2"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        <h1 className="text-red-700 font-bold mt-2 text-3xl hidden sm:block">🕉Radhe Radhe🙏</h1>
      </div>
      {user && (
        <div className="">
          {
            showGptSearch &&(
            <select
              className="mr-4 p-2 rounded-md bg-black text-white"
              onChange={handleLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            )
          }

          <button
            className="bg-red-700  md:mr-24 px-4 py-2 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            { showGptSearch?"Home":"🔍 GPT Search"}
          </button>
          <button
            className="hover:text-white text-black mr-5 bg-red-700 my-3 px-4 py-2  rounded-full  "
            onClick={handleSignOut}
          >
            {user.displayName !== null ? user.displayName[0].toUpperCase() : ""}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
