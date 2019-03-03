import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Nonstop", duration: "3:30" },
    { title: "Sicko Mode", duration: "3:49" },
    { title: "NAV", duration: "3:20" },
    { title: "Starboy", duration: "3:40" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
