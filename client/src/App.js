import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }

  render() {
    return (
      <div className= "container">
        <h1>Top 100 Songs</h1>
        <SongForm />
        <SongList />
      </div>
    );
  }
}

export default App;
