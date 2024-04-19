import React, { useEffect } from "react";
import useWordle from "./useWordle";
import Grid from "./Grid";

const Sheeple = ({ solution }) => {
	const { currentGuess, guesses, turn, isCorrect, handleKeyup } =
		useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyup);

		return () => window.removeEventListener("keyup", handleKeyup);
	}, [handleKeyup]);

	return (
		<div>
			<div>Current Guess - {currentGuess}</div>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
		</div>
	);
};

export default Sheeple;
