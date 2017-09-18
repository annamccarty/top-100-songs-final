import React from 'react';

const Song = ({ id, name, updateSong, deleteSong }) => (
  <div className="col s12">
    <div className="col s4">
      <span className="center">
        {name}
      </span>
    </div>
    <div className="col s8">
      <button>Edit</button>
      <button onClick={() => deleteSong(id)}>Delete</button>
    </div>
  </div>
)

export default Song;
