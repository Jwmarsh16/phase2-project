import React from "react";
import '../Style/SongCardStyle.css'

function SongCard({song, deleteSong}) {
    
    return (
        <li className="song-card">
            <div className="song-info">
                <h3>{song.title}</h3>
                <p>Artist: {song.artist}</p>
                <p>Album: {song.album}</p>
                <button className="remove-button" onClick={() => deleteSong(song.id)}>x</button>
            </div>
        </li>
    
        
    )
}

export default SongCard;