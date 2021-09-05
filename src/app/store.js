import { configureStore } from "@reduxjs/toolkit";
import graphsReducer from "../features/graphs/graphsSlice";

export default configureStore({
  reducer: {
    graphs: graphsReducer,
  },
});
