import React from 'react';

import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';

interface Props {
	weather: Weather,
}
export interface Item {
	icon_id: string,
	name: string,
	value: string,
}
export const ThisDayInfo = ({ weather }: Props) => {
	const {
		main: { temp, feels_like: temp_feels, pressure },
		weather: [{ description }],
		wind: { speed: wind_speed },
	} = weather

	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.round(temp)}° - ощущается как ${Math.round(temp_feels)}°`,
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${Math.round(pressure / 1.333)} мм ртутного столба - нормальное`,
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: description,
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${wind_speed} м/с юго-запад - легкий ветер`,
		},
	]
	return (
		<article className={s.this__day_info}>
			<div className={s.this__day_info_items}>
				{
					items.map((item: Item) => (
						<ThisDayItem item={item} key={item.icon_id} />
					))
				}
			</div>
			<img src={cloud} alt="Облако" className={s.cloud__image} />
		</article>
	)
}