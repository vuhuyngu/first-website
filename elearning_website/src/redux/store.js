import { configureStore } from "@reduxjs/toolkit";

import SavedSlice from "./slices/SavedSlice";

const store = configureStore({
  reducer: {
    saved: SavedSlice,
  },
});

export default store;
