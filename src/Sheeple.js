import React, { useEffect } from "react";
import useWordle from "./useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import keys from "./keys";

const Sheeple = ({ solution }) => {
	const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyUp } =
		useWordle(solution);
	let end = "";

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		if (isCorrect) {
			window.removeEventListener("keyup", handleKeyUp);
		}
		if (turn > 5) {
			window.removeEventListener("keyup", handleKeyUp);
		}
		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp, isCorrect, turn]);

	if (isCorrect) {
		end = "Congratulations!";
	}

	if (turn > 5) {
		end = "You've ran out of guesses! Word is Sheep!";
	}

	return (
		<div>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			<Keypad keys={keys} usedKeys={usedKeys} />
			<div>{end}</div>
		</div>
	);
};

export default Sheeple;
