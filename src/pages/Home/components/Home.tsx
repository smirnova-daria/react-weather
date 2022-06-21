import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/store";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { Days } from "./Days/Days";
import s from './Home.module.scss'
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";

interface Props {

}

export const Home = (props: Props) => {
	const dispatch = useCustomDispatch();
	const { weather } = useCustomSelector(selectCurrentWeatherData)

	useEffect(() => {
		dispatch(fetchCurrentWeather('moscow'))
	}, [dispatch])
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo weather={weather} />
			</div>
			<Days />
		</div>
	)
}