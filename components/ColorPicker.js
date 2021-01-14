import { setState, useState, useEffect } from 'react';

const themes = [
		{name: 'mint', light: '#D8E2DC', dark: '#7A7F7C' },
		{name: 'rosee', light: '#f8edeb', dark: '#fec5bb' },
		{name: 'yale', light: '#f1faee', dark: '#1d3557' },
		{name: 'iceCream', light: '#feeafa', dark: '#8e9aaf' },
 		{name: 'ocean', light: '#caf0f8', dark: '#03045e' },
		{name: 'lightGrey', light: '#f2e9e4', dark: '#4a4e69' },
		{name: 'darkGrey', light: '#e0e1dd', dark: '#415a77' },
		{name: 'black', light: '#fff', dark: '#333' },
];


export const ColorPicker = () => {
	let root;
	useEffect( () => { root = document.documentElement; } );

	// grab the first theme to use as the default
	const [theme, setTheme] = useState( themes[0] );

	// Change the color mode (light / dark)
	const [mode, setMode] = useState( 'light' );

	function changeColor(e) {
		const themeID = e.target.id;
		setTheme(themes.find(theme => theme.name == themeID));

		root.style.setProperty('--c-light', mode == 'light' ? theme.light : theme.dark);
		root.style.setProperty('--c-dark', mode == 'dark' ? theme.light : theme.dark);
	}

	function toggleMode() {
		mode == 'light' ? setMode('dark') : setMode('light')
	}

	return (
		<div className="primary-navigation text-lg uppercase pt-8 mt-12 border-t-2 border-black opacity-10">
			{themes.map( theme => {
				const style = {
					background: `linear-gradient(to left, ${theme.light} 50%, ${theme.dark} 50%)`
				};
				return (
					<>
						<input
						onChange={(e) => {
							changeColor(e);
						}}
						className="variation"
						id={theme.name}
						type="radio"
						value="1"
						name="color" />
						<label style={style} htmlFor={theme.name}></label>
					</>
				)
			}) }
			<button onClick={toggleMode}>Reverse</button>

		</div>
	);
};
