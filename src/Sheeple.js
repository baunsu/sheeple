import React, { useEffect } from "react";
import useWordle from "./useWordle";

const Sheeple = ({ solution }) => {
	const { currentGuess, handleKeyup } = useWordle(solution);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyup);

		return () => window.removeEventListener("keyup", handleKeyup);
	}, [handleKeyup]);

	return (
		<div>
			<div>Current Guess - {currentGuess}</div>
		</div>
	);
};

export default Sheeple;
