import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { logo } from "../Utils/constants";

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(removeUser());
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <img
          className="absolute z-10 bg-black/50 w-1/12"
          src= {logo}
          alt="Logo"
        />
      </div>
      {user && (
        <div className="flex justify-between">
          <img
            className="w-11 h-8 pl-2 pr-2"
            src={user.photoURL}
            alt="Coming"
          />
          <button className="bg-red-500 cursor-pointer" onClick={handleClick}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
