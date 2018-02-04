import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
// import './table.css'

class WeatherList extends Component {

  onPost() {
    return (9/5 * (data - 273 ) + 32)
  }

  renderWeather(cityData){
    function KelvinToFahrenheit(data) {
      return (9/5 * (data - 273 ) + 32)
    }

    const name = cityData.city.name
    const temps = cityData.list.map(weather => KelvinToFahrenheit(weather.main.temp))

    // const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange"  units="F"/></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }



  render() {
    return (<table className="table table-hover">
      <thead>
        <tr>
          <th> City </th>
          <th> Temperature </th>
          <th> Pressure </th>
          <th> Humidity </th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>)
  }
}

function mapStateToProps({ weather }) {
  return { weather } // { weather } === { weather: weather}
}

export default connect (mapStateToProps)(WeatherList)
