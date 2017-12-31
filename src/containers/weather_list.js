import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData, index, sth, arr){
    console.log(cityData);
    console.log(index);
    console.log(sth);
    console.log(arr);
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather);
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
  return { weather }; // { weather } === { weather: weather}
}

export default connect (mapStateToProps)(WeatherList);
