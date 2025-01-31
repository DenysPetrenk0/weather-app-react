import {configureStore, createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		data: null,
		searchHistory: [],
		catch: {}
	},
	reducers: {
		setWeather(state, action) {
			state.data = action.payload;
		},

		setError(state, action) {
			state.error = action.payload;
		},
	}
});

export const {setWeather, setError} = weatherSlice.actions;

const store = configureStore({
	reducer: {
		weather: weatherSlice.reducer
	}
});

export default store;