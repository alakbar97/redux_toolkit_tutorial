import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

const dogs = createSlice({
  name: "getDogs",
  initialState,
  reducers: {
    fetchDogBreed(state, action) {
      state.loading = true;
    },
    fetchDogBreedSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: dogsKey } = dogs;
