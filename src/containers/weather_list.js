import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import './table.css';

class WeatherList extends Component {
  renderWeather(cityData, index, sth, arr){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={temps} color="green" /></td>
        <td><Chart data={temps} color="blue" /></td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather);
    return (<table className="table table-hover">
      <thead>
        <tr>
          <th> City </th>
          <th> Temperature (K)</th>
          <th> Pressure (hPa) </th>
          <th> Humidity (%) </th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>)
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather}
}

export default connect (mapStateToProps)(WeatherList);
