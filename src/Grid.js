import React from "react";
import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
	return (
		<div>
			{guesses.map((g, i) => {
				return <Row key={i} />;
			})}
		</div>
	);
};

export default Grid;
