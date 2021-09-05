import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
});
const initialState = {
  graphs: [],
  status: "idle",
  error: null,
};

export const fetchGraphs = createAsyncThunk(
  "graphs/fetchGraphs",
  async (body) => {
    const response = await api.post("summoner-data/", body);
    return response.data;
  }
);

const graphsSlice = createSlice({
  name: "graphs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGraphs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGraphs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.graphs = state.graphs.concat(action.payload);
      })
      .addCase(fetchGraphs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default graphsSlice.reducer;

export const selectAllGraphs = (state) => state.graphs.graphs;
