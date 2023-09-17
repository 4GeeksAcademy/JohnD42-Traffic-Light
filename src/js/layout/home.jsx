import React from "react";
import TrafficLightBody from '../component/TrafficLightBody.jsx'
import LightCycleButton from '../component/LightCycleButton.jsx'

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<TrafficLightBody />
		</div>
	);
};

export default Home;
