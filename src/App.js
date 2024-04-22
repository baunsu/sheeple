import Sheeple from "./Sheeple";

function App() {
	const solution = "sheep";
	return (
		<div className="App">
			<h1>Sheeple</h1>
			{solution && <Sheeple solution={solution} />}
		</div>
	);
}

export default App;
