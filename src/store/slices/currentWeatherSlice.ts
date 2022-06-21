import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type CurrentWeather = {
	weather: Weather;
	isLoading: boolean;
	response: Response;
}

type Response = {
	status: number;
	message: string;
}

const initialState: CurrentWeather = {
	weather: {
		weather: [{
			main: 'clear',
			description: 'ясно',
		}],
		main: {
			temp: 0,
			feels_like: 0,
			pressure: 0,
		},
		wind: {
			speed: 0,
		},
		name: 'Москва',
		dt: 0,
	},
	isLoading: false,
	response: {
		status: 0,
		message: '',
	}
}

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
			state.weather = action.payload.data;
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},
		fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},

	}
})

export default currentWeatherSlice.reducer