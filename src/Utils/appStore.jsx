import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Utils/userSlice";
import moviesReducer from "../Utils/movieSlice"
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appstore;
