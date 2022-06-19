import React from 'react';
import s from './Days.module.scss'
interface Props { }
export interface Tab {
	value: string
}
export const Tabs = (props: Props) => {
	const tabs: Tab[] = [
		{ value: 'На неделю' },
		{ value: 'На месяц' },
		{ value: 'На 10 дней' },
	]
	return (
		<div className={s.tabs}>
			<div className={s.tabs__wrapper}>
				{tabs.map((tab: Tab) => (
					<div className={s.tab} key={tab.value}>{tab.value}</div>
				))}
			</div>
			<div className={s.cancel}>Отменить</div>
		</div>
	)
}