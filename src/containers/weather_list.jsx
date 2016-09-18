import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

let count = 0;

class WeatherList extends Component {

	render() {
		return (
			<table className="table table-hover" id="weather-chart">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}

	renderWeather(cityData) {
		console.log(cityData);
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;

		return (
			<tr key={count++}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart color='orange' data={temps} units="K" /></td>
				<td><Chart color='blue' data={pressures} units="hPa" /></td>
				<td><Chart color='green' data={humidities} units="%" /></td>
			</tr>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
