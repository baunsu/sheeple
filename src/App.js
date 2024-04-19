import Sheeple from "./Sheeple";

function App() {
	const solution = "Sheep";
	return (
		<div className="App">
			<h1>Sheeple</h1>
			{solution && <Sheeple solution={solution} />}
		</div>
	);
}

export default App;
