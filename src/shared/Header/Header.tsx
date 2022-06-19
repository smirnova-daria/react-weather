import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';

interface Props { }

export const Header = (props: Props) => {
	const options = [
		{ value: 'SPB', label: 'Санкт-Петербург' },
		{ value: 'Moscow', label: 'Москва' },
		{ value: 'VLuki', label: 'Великие Луки' }
	]
	const colorStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: 'rgba(71,147,255,0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		})
	}

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id="header-logo" />
				</div>
				<div className={s.title}>React Weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme}>
					<GlobalSvgSelector id="change-theme" />
				</div>
				<Select options={options} styles={colorStyles} defaultValue={options[0]} />
			</div>
		</header>
	)
}