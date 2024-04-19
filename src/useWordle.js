import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [history, setHistory] = useState([]);
	const [isCorrect, setIsCorrect] = useState(false);

	const formatGuess = () => {
		let solutionArray = [...solution];
		let formattedGuess = [...currentGuess].map((l) => {
			return { key: 1, color: "gray" };
		});

		formattedGuess.forEach((l, i) => {
			if (solution[i] === l.key) {
				formattedGuess[i] = "green";
				solutionArray[i] = null;
			}
		});

		formattedGuess.forEach((l, i) => {
			if (solutionArray.includes(l.key) && l.color !== "green") {
				formattedGuess[i].color = "yellow";
				solutionArray[solutionArray.indexOf(l.key)] = null;
			}
		});

		return formattedGuess;
	};

	const addNewGuess = () => {};

	const handleKeyUp = ({ key }) => {
		if (key === "Enter") {
			if (turn > 5) {
				console.log("You've ran out of guesses!");
				return;
			}

			if (history.includes(currentGuess)) {
				console.log("You've already used that word!");
				return;
			}

			if (currentGuess.length === 5) {
				const formatted = formatGuess();
				console.log(formatted);
			}
		}
		if (key === "Backspace") {
			setCurrentGuess((prev) => prev.slice(0, -1));
			return;
		}
		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => prev + key);
			}
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
