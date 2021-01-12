export const ColorPicker = () => {
	const root = window.document.documentElement;

	function changeColor(e) {
		const id = e.target.id;
		if (id == 'yellow-purple') {
			root.style.setProperty('--c-background', '#3d405b');
			root.style.setProperty('--c-primary', '#f4f1de');
		}

		if (id == 'blue-green') {
			root.style.setProperty('--c-background', '#264653');
			root.style.setProperty('--c-primary', '#e9c46a');
		}

		if (id == 'mint-navy') {
			root.style.setProperty('--c-background', '#f1faee');
			root.style.setProperty('--c-primary', '#f4acb7');
		}

		if (id == 'rosee') {
			root.style.setProperty('--c-background', '#ffe5d9');
			root.style.setProperty('--c-primary', '#9d8189');
		}
	}

	return (
		<div className="primary-navigation text-lg uppercase pt-8 mt-12 border-t-2 border-black opacity-10">
			<label htmlFor="bluepurple"></label>
			<input
				onChange={(e) => {
					changeColor(e);
				}}
				className="variation"
				id="yellow-purple"
				type="radio"
				value="1"
				name="color"
			></input>

			<label htmlFor="blue-green"></label>
			<input
				onChange={(e) => {
					changeColor(e);
				}}
				className="variation"
				id="blue-green"
				type="radio"
				value="2"
				name="color"
			></input>

			<label htmlFor="mint-navy"></label>
			<input
				onChange={(e) => {
					changeColor(e);
				}}
				className="variation"
				id="mint-navy"
				type="radio"
				value="2"
				name="color"
			></input>

			<label htmlFor="blue-green"></label>
			<input
				onChange={(e) => {
					changeColor(e);
				}}
				className="variation"
				id="blue-green"
				type="radio"
				value="2"
				name="color"
			></input>

			<label htmlFor="blue-green"></label>
			<input
				onChange={(e) => {
					changeColor(e);
				}}
				className="variation"
				id="blue-green"
				type="radio"
				value="2"
				name="color"
			></input>

			<label htmlFor="rosee"></label>
			<input
				onChange={(e) => {
					changeColor(e);
				}}
				className="variation"
				id="rosee"
				type="radio"
				value="2"
				name="color"
			></input>
		</div>
	);
};
