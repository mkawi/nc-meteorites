import { useEffect, useState } from "react";
import { csvFormat, csvParse } from "d3"

import Globe from "./pages/Globe";

import meteoriteData from "./data/Meteorite_Landings_20240205 - cleaned.csv"

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const csvString = csvFormat(meteoriteData)
			const formattedData = csvParse(csvString, ({ reclat, reclong, mass }) => {
				let weight = 0;

				if (mass < 1000) {
					weight = 0.25
				} else if (mass < 10000) {
					weight = 1
				} else if (mass < 100000) {
					weight = 2.5
				} else if (mass < 1000000) {
					weight = 7.5
				} else if (mass <= 10000000) {
					weight = 15
				} else if (mass > 10000000) {
					weight = 20
				}

				return { lat: reclat, lng: reclong, mass: weight }
			})
			setData(formattedData)
		}

		fetchData()
	}, []);

	return (
		<>
			<Globe meteorites={data} />
		</>
	);
}

export default App;
