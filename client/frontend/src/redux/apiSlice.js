import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    books: [],
    status: "idle",
    error: null,
    form: {},
    message: null,
    method: "create",
    id: "",
  },

  reducers: {
    increment2: (state) => {
      state.counter2 += 1;
    },
    fetchBooksTest: (state) => {
      state.books.push(fetchBooks);
    },
    createToggle: (state) => {
      state.id = "";
      state.method = "create";
    },
    updateToggle: (state, action) => {
      state.method = "update";
      state.id = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = state.books.concat(action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        if (action.payload.data) state.message = action.payload.data;
        else {
          state.books.push(action.payload);
        }
      })
      .addCase(insertBook.rejected, (state, action) => {
        console.log("book is not inserted from api reducer");
      })
      .addCase(editBook.fulfilled, (state, action) => {
        let selectedIndex = state.books.findIndex(
          (elem) => elem.id === state.id
        );
        state.books[selectedIndex] = action.payload.data;
        console.log(state.id);
      })
      .addCase(editBook.rejected, (state, action) => {
        console.log("book was not edited from api reducer");
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        let selectedIndex = state.books.findIndex(
          (elem) => elem.id === action.payload.id
        );
        state.books.splice(selectedIndex, 1);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get("http://localhost:8050/api/v1/books");
  return response.data;
});

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (bookInserted) => {
    const response = await axios.post(
      "http://localhost:8050/api/v1/books",
      bookInserted
    );
    return response.data;
  }
);

export const editBook = createAsyncThunk(
  "books/editBook",
  async (bookInserted) => {
    const response = await axios.patch(
      `http://localhost:8050/api/v1/books/${bookInserted.bookId}`,
      bookInserted.formFields
    );
    return response.data;
  }
);

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  const response = await axios.delete(
    `http://localhost:8050/api/v1/books/${id}`
  );
  return response.data;
});

export const selectBooks = (state) => state.books;

const { actions, reducer } = apiSlice;
export const { increment2, fetchBooksTest, updateToggle } = actions;
export default reducer;
