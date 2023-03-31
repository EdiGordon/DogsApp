import { initialUserState, User } from "./user.d";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: initialUserState = {
    loading: false,
    error: "",
    users: [],
};

export const fetchUsers = createAsyncThunk<User[]>("user/fetchUsers", () =>
    fetch("https://jsonplaceholder.typicode.com/users/").then((res) => res.json())
);

// fetch user from api
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true
                state.error = ''
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.users = []
                state.error = action.error.message ?? 'Something went wrong'
            })
    },
});
// also exported fetchUsers at the top

//export the reducer
export default userSlice.reducer


