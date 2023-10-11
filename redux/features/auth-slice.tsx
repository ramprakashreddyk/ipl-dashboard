"use client"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
type InitialState = {
    allTeams:any;
}

const initialState: InitialState = {
    allTeams:[]
}
export const getAllTeams = createAsyncThunk("teams/getAllTeams", async (userData, thunkAPI) => {
    try {
        const response = await axios.get("https://apis.ccbp.in/ipl",)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllTeams.fulfilled, (state, action) => {
            state.allTeams = action.payload
        })
    }

});

export const { } = authSlice.actions;
export default authSlice.reducer;