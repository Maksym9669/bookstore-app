import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment2: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter2 += 1;
    },
    fetchBooksTest: (state) => {
      state.books = [1, 2, 3];
    },
  },
});

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get("http://localhost:8050/api/v1/books");
  console.log(response.data);
  return response.data;
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBooks = (state) => state.books;

const { actions, reducer } = apiSlice;
export const { increment2, fetchBooksTest } = actions;
export default reducer;
