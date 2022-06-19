import React from 'react';
import { Card } from './Card';
import s from './Days.module.scss'
interface Props { }

export interface Day {
	day: string,
	day_info: string,
	icon_id: string,
	temp_day: string,
	temp_night: string,
	info: string,
}

export const Days = (props: Props) => {
	const days: Day[] = [
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18°',
			temp_night: '+15°',
			info: 'Ясно',
		},
		{
			day: 'Сегодня',
			day_info: '29 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+15°',
			temp_night: '+10°',
			info: 'Небольшой дождь',
		},
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'small_rain',
			temp_day: '+18°',
			temp_night: '+15°',
			info: 'Облачно',
		},
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'mainly_cloudy',
			temp_day: '+18°',
			temp_night: '+15°',
			info: 'Пасмурно',
		},
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'rain',
			temp_day: '+18°',
			temp_night: '+15°',
			info: 'Дождь',
		},
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18°',
			temp_night: '+15°',
			info: 'Солнечно',
		},
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'rain',
			temp_day: '+18°',
			temp_night: '+15°',
			info: 'Дождь',
		},
	]
	return (
		<div className={s.days}>
			{days.map((day: Day) => (
				<Card day={day} />
			))}
		</div>
	)
}