import { auth } from '../../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../utils/redux/userSlice';
import { useNavigate } from 'react-router';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
     const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
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



  const user=useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
        // dispatch(removeUser());
        // navigate('/');
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <div className='absolute h-16 w-full bg-gradient-to-b from-black  flex justify-between'>
       <img className='w-44 left-24 top-2' alt="logo" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
       {user && <button className='hover:text-blue-900 text-white mr-5' onClick={handleSignOut}>Hello {user.displayName}</button>} 
    </div>
  );
};

export default Header;
