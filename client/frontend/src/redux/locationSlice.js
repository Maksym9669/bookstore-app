import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: ["Bangalore", "Hyderabad", "Delhi"],
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.location = [...state.location, payload];
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLocation = (state) => state.location;

const { actions, reducer } = locationSlice;
export const { save } = actions;
export default reducer;
