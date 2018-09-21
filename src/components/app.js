import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* change things here */}
        {/* add comment line */}
        <SearchBar />
        <WeatherList />
      </div>

    );
  }
}

export default App
