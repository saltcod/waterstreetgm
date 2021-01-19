import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const themes = [
	{ name: 'banana', light: '#FFE699', dark: '#000' },
	{ name: 'mint', light: '#D8E2DC', dark: '#7A7F7C' },
	{ name: 'rosee', light: '#f8edeb', dark: '#f6ab9e' },
	{ name: 'yale', light: '#f1faee', dark: '#1d3557' },
	{ name: 'iceCream', light: '#feeafa', dark: '#67707f' },
	{ name: 'ocean', light: '#caf0f8', dark: '#03045e' },
	{ name: 'lightGrey', light: '#f2e9e4', dark: '#4a4e69' },
	{ name: 'darkGrey', light: '#e0e1dd', dark: '#415a77' },
	{ name: 'black', light: '#fff', dark: '#333' },
];

export const ColorPicker = () => {
	let root;
	useEffect( () => { root = document.documentElement; } );

	// grab the first theme to use as the default
	const [theme, setTheme] = useState(themes[0]);
	// Change the color mode (light / dark)
	const [mode, setMode] = useState( 'light' );


	/**
	 * Change the colours in the document
	 */
	useEffect( () => {
		root.style.setProperty('--c-light', mode == 'light' ? theme.light : theme.dark);
		root.style.setProperty('--c-dark', mode == 'dark' ? theme.light : theme.dark);
	});

	/**
	 * Update state
	 */
	function changeColor(e) {
		const themeID = e.target.id;
		setTheme(themes.find(theme => theme.name == themeID));
		console.log('found theme', themes.find(theme => theme.name == themeID));
	}

	function toggleMode() {
		mode == 'light' ? setMode('dark') : setMode('light')
	}

	return (
		<div className="flex items-center text-lg uppercase pt-8 mt-12 container px-4 mx-auto">
			{themes.map((theme, i) => {
				const style = {
					background: `linear-gradient(to left, ${theme.light} 50%, ${theme.dark} 50%)`,
				};
				return (
					<span key={uniqid(i)}>
						<input
							onChange={(e) => {
								changeColor(e);
							}}
							className="variation"
							id={theme.name}
							type="radio"
							value="1"
							name="color"
						/>
						<label style={style} htmlFor={theme.name}></label>
					</span>
				);
			})}
			<button onClick={toggleMode} className={mode == 'light' ? theme.dark : theme.light}>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25" height="22" className="fill-current">
					<path
						d="M24.8 6.842H3.362l3.485 4.216-.908.967L.2 6.051 5.94.018l.908.966-3.485 4.218H24.8v1.64zm0 9.106l-5.74 6.034-.909-.967 3.486-4.217H.2v-1.64h21.436l-3.486-4.217.908-.966 5.74 5.973z"
						fontSize="29.285"
						fontWeight="400"
						fontFamily="Arial"
					/>
				</svg>
			</button>
		</div>
	);
};
