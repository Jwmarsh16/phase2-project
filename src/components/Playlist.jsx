import React from "react";
import SongCard from '../CardComponents/SongCard';
import '../Style/Playlist.css'

function Playlist({ songList, deleteSong }) {

    
    const songCards = songList.map(song => (<SongCard key={song.id} song={song} deleteSong={deleteSong} />
    
    ));


    return (
        <div className="playlist-container">
            <h2>Playlist</h2>
            <ul>
                { songCards }
            </ul>
        </div>
    )
}

export default Playlist;