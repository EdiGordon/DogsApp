import { fetchDogs } from "../../services/dogs-service";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog, Dogs } from "./news.d";

const initialState: Dogs = {
    dogs: [],
    error: "",
    loading: false,
};

export const fetchNews = createAsyncThunk<Dog[]>(
    "news/fetchNews",
    fetchDogs

);

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        //payload = id of the article
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const index = state.dogs.findIndex((a) => a.name === action.payload);
            if (index !== -1) {
                state.dogs[index].isFavorite = !state.dogs[index].isFavorite;
            }
        },
        removeDog: (state, action: PayloadAction<string>) => {
            const index = state.dogs.findIndex((a) => a.name === action.payload);
            if (index !== -1) {
                state.dogs[index].is_visible = false;
            }
        },
        editDog: (state, action: PayloadAction<string[]>) => {
            const index = state.dogs.findIndex((a) => a.name === action.payload[0]);
            if (index !== -1) {
                state.dogs[index].description = action.payload[1];
            }
        },
        addDog: (state, action: PayloadAction<Dog>) => {
            state.dogs.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state, action) => {
                state.loading = true;
                state.error = "";
                state.dogs = [];
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Something went wrong";
                state.dogs = [];
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.dogs = action.payload;
            });
    },
});

export default newsSlice.reducer;
export const { toggleFavorite, removeDog, editDog, addDog } = newsSlice.actions;
