import Globe from "react-globe.gl";
import { scaleSequentialSqrt, interpolateYlOrRd } from "d3"

function Earth({ meteorites }) {
	const weightColour = scaleSequentialSqrt(interpolateYlOrRd).domain([0, 35])

	const setAltitude = (sumWeight) => {
		if (sumWeight >= 1000) {
			return sumWeight * 0.0005
		} else if (sumWeight >= 400) {
			return sumWeight * 0.001
		} else if (sumWeight >= 100) {
			return sumWeight * 0.002
		} else if (sumWeight >= 25) {
			return sumWeight * 0.005
		} else {
			return sumWeight * 0.0075
		}
	}

	return (
		<Globe
			globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
			bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
			backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
			atmosphereAltitude={0.25}
			hexBinPointsData={meteorites}
			hexBinPointWeight="mass"
			hexMargin={0.2}
			hexBinResolution={3}
			hexTopColor={({ sumWeight }) => weightColour(sumWeight)}
			hexSideColor={({ sumWeight }) => weightColour(sumWeight)}
			hexAltitude={({ sumWeight }) => setAltitude(sumWeight)}
			onHexClick={(d) => console.log("CLICKED", d)}
		/>
	);
}

export default Earth;
