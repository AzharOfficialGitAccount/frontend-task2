import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export interface ApiState {
    data: any;
    isLoading: boolean;
    error: string | null;
}

export const fetchData = createAsyncThunk('api/fetchData', async (url: string) => {
    const response = await api.get(url);
    return response.data;
});

const initialState: ApiState = {
    data: null,
    isLoading: false,
    error: null,
};

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    },
});

export default apiSlice.reducer;
