import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Book {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  isbn13: string;
  description: string;
}

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk<Book[]>(
  'books/fetchBooks',
  async () => {
    const response = await fetch('https://api.itbook.store/1.0/new');
    const data = await response.json();
    return data.books;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.error = null; // Сбрасываю ошибку при успешном выполнении запроса
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Unknown error'; // Преобразую ошибку в строку
      });
  },
});

export const selectBooks = (state: RootState) => state.books.books;
export const selectBooksLoading = (state: RootState) => state.books.loading;
export const selectBooksError = (state: RootState) => state.books.error;

export default booksSlice.reducer;

