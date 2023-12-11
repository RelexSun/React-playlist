import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slices
const songsSlice = createSlice({
  name: "song",
  // 1) defines some initial state
  initialState: [],
  // 2) combined mini-reducers into a big reducer
  // saves us some time without trying to write out all the boilerplate
  reducers: {
    // 
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();
console.log(JSON.stringify(startingState)); // easier to read

store.dispatch({
  type: "song/addSong",
  payload: "New Song!!!",
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));
