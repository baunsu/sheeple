const Modal = ({ isCorrect, solution, turn }) => {
	return (
		<div className="modal">
			{isCorrect && (
				<div>
					<h1>You Win!</h1>
					<p className="solution">{solution}</p>
					<p>You took {turn} guesses.</p>
				</div>
			)}
			{!isCorrect && (
				<div>
					<h1>Unlucky!</h1>
					<p className="solution">{solution}</p>
					<p>Better luck next time!</p>
				</div>
			)}
		</div>
	);
};

export default Modal;
