import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
	weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
	const {
		name: city,
		dt,
		weather: [{ main: icon }],
	} = weather

	const time = (new Date(dt * 1000)).toLocaleTimeString('ru-RU');

	return (
		<article className={s.this__day}>
			<div className={s.top__block}>
				<div className={s.top__block_wrapper}>
					<div className={s.this__temp}>{Math.round(weather.main.temp)}°
					</div>
					<div className={s.this__day_name}>Сегодня</div>
				</div>
				<GlobalSvgSelector id={icon.toLowerCase()} />
			</div>
			<div className={s.bottom__block}>
				<div className={s.this__time}>Время: <span>{time}</span></div>
				<div className={s.this__city}>Город: <span>{city}</span></div>
			</div>
		</article>
	)
}