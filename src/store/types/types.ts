export type Weather = {
	weather: [{
		main: string,
		description: string,
	}],
	main: {
		temp: number,
		feels_like: number,
		pressure: number,
	},
	wind: {
		speed: number,
	},
	name: string,
	dt: number,
};