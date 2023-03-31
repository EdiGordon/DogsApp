import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice'
import newsReducer from '../features/news/newsSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    counter: counterReducer,
    user: userReducer,
  },
});

// הגדרת טיפוסים של המצב בחנות
export type RootState = ReturnType<typeof store.getState>;

//של החנות שלנו dispatch  הגדרות טיפוסים של הפונקציה 
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;