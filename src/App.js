import './App.css';

// Example of a data array that
// you might receive from an API
const data = [
	{ sensor: "h1", location: "Barcelona", value: "1000", units: "m3" },
	{ sensor: "h2", location: "Barcelona", value: "500", units: "m3" },
	{ sensor: "h3", location: "Madrid", value: "700", units: "m3" },
]

function App() {
	return (
		<div className="App">
			<table>
				<tr>
					<th>Sensor hash</th>
					<th>Location</th>
					<th>Value</th>
          <th>Units</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.sensor}</td>
							<td>{val.location}</td>
							<td>{val.value}</td>
              <td>{val.units}</td>
						</tr>
					)
				})}
			</table>
		</div>
	);
}

export default App;
