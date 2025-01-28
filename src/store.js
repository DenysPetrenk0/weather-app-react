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
			// const {city, weatherData} = action.payload;
			state.data = action.payload;

			// state.catch[city.toLowerCase()] = weatherData;

			// if (!state.searchHistory.includes(city.toLowerCase())) {
			// 	state.searchHistory.push(city.toLowerCase());
			// }
		},

		setError(state, action) {
			state.error = action.payload;
		},

		// clearError(state) {
		// 	state.error = null;
		// }
	}
});

export const {setWeather, setError} = weatherSlice.actions;

const store = configureStore({
	reducer: {
		weather: weatherSlice.reducer
	}
});

export default store;