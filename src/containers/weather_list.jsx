import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

let count = 0;

class WeatherList extends Component {

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		console.log(temps.length);
		console.log(pressures.length);

		return (
			<tr key={count++}>
				<td>{name}</td>
				<td><Chart color='orange' data={temps} /></td>
				<td><Chart color='blue' data={pressures} /></td>
				<td><Chart color='green' data={humidities} /></td>
			</tr>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
