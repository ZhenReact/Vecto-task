import { Middleware } from "@reduxjs/toolkit";
import { setMovies } from "../features/movies/movieSlice";

export const  sessionStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (setMovies.match(action)) {
    try {
       sessionStorage.setItem("movies", JSON.stringify(action.payload));
    } catch (e) {
      console.error("Failed to save movies to  sessionStorage", e);
    }
  }

  return result;
};