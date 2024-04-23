import React, { useEffect, useState } from "react";
import useWordle from "./useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import keys from "./keys";
import Modal from "./Modal";

const Sheeple = ({ solution }) => {
	const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyUp } =
		useWordle(solution);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		if (isCorrect) {
			setTimeout(() => setShowModal(true), 2000);
			window.removeEventListener("keyup", handleKeyUp);
		}
		if (turn > 5) {
			setTimeout(() => setShowModal(true), 2000);
			window.removeEventListener("keyup", handleKeyUp);
		}
		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp, isCorrect, turn]);

	return (
		<div>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			<Keypad keys={keys} usedKeys={usedKeys} />
			{showModal && (
				<Modal isCorrect={isCorrect} turn={turn} solution={solution} />
			)}
		</div>
	);
};

export default Sheeple;
