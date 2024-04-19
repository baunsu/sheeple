import Sheeple from "./Sheeple";

function App() {
	const solution = "Sheep";
	return (
		<div className="App">
			<h1>Sheeple</h1>
			{solution && <div>Sheeple solution = {solution}</div>}
		</div>
	);
}

export default App;
