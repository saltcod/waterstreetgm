const RevolvingPerson = props => {
	const { person } = props;

	return (
		<>
			<span className="revolving-person inline-block w-16 text-center">{person}</span>
		</>
	);
};

export default RevolvingPerson;
