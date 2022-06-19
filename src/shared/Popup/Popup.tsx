import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss'
interface Props {
}

export const Popup = (props: Props) => {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: '20° - ощущается как 17°',
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: '765 мм ртутного столба - нормальное',
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков',
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: '3 м/с юго-запад - легкий ветер',
		},
	]
	return (
		<>
			<div className={s.blur}></div>
			<div className={s.popup}>
				<div className={s.day}>
					<div className={s.day__temp}>20°</div>
					<div className={s.day__name}>Среда</div>
					<div className={s.day__img}>
						<GlobalSvgSelector id="rain" />
					</div>
					<div className={s.day__time}>Время: 01:54</div>
					<div className={s.day__city}>Санкт-Петербург</div>
				</div>
				<div className={s.this__day_info_items}>
					{
						items.map((item: Item) => (
							<ThisDayItem item={item} key={item.icon_id} />
						))
					}
				</div>
				<div className={s.close}>
					<GlobalSvgSelector id="close" />
				</div>
			</div>
		</>
	)
}