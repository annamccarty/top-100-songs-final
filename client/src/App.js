import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios';

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('./api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }

  addSong = (name) => {
    const { songs } = this.state;
    axios.post('./api/songs', { song: { name }} )
      .then(res => {
        this.setState({ songs: [res.data, ...songs] })
      })

  }

  editSong = (id) => {
  }

  deleteSong = (id) => {
    const { songs } = this.state;
    axios.delete(`/api/songs/${id}`)
      .then( res => {
        this.setState({ songs: songs.filter( t => t.id !== id ) })
      })
  }

  render() {
    return (
      <div className= "container">
        <h1>Top 100 Songs</h1>
        <SongForm addSong={this.addSong}/>
        <SongList
          songs={this.state.songs}
          editSong={this.editSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;
