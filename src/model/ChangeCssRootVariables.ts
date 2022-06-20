import { Theme } from "../context/ThemeContext";

export function changeCssRootVariables(theme: Theme) {
	const root = document.querySelector(':root') as HTMLElement

	const themeVariablesNames: string[] = [
			'body-background',
			'components-background',
			'card-background',
			'card-shadow',
			'text-color'
	];

	themeVariablesNames.forEach((varName) => {
			root.style.setProperty(
				`--${varName}-default`,
				`var(--${varName}-${theme})`
			)
	})
}