import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContentItem, MovieState } from "../../types";


const moviesFromStorage = JSON.parse( sessionStorage.getItem("movies") || "[]") as ContentItem[];
const lastSeenFromStorage =  sessionStorage.getItem("lastSeen");

const featuredFromStorage = lastSeenFromStorage
  ? moviesFromStorage.find((item) => item.Id === lastSeenFromStorage) || null
  : null;

const initialState: MovieState = {
  featured: featuredFromStorage,
  movies: moviesFromStorage,
  trending: [],
  lastSeen: lastSeenFromStorage,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<ContentItem[]>) {
      state.movies = action.payload;

      const sorted = [...action.payload];
      if (state.lastSeen) {
        const lastSeenItemIndex = sorted.findIndex((item) => item.Id === state.lastSeen);
        if (lastSeenItemIndex !== -1) {
          const [lastSeenItem] = sorted.splice(lastSeenItemIndex, 1);
          sorted.unshift(lastSeenItem);
        }
      }

      state.trending = sorted.slice(0, 50);
    },

    setFeatured(state, action: PayloadAction<ContentItem>) {
      state.featured = action.payload;
      state.lastSeen = action.payload.Id;
       sessionStorage.setItem("lastSeen", action.payload.Id);
    },
  },
});

export const { setMovies, setFeatured } = movieSlice.actions;
export default movieSlice.reducer;
