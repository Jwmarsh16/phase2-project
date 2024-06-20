import React from "react";
import SongCard from '../CardComponents/SongCard';

function Playlist({ songList, deleteSong }) {

    
    const songCards = songList.map(song => (<SongCard key={song.id} song={song} deleteSong={deleteSong} />
    
    ));


    return (
        <div>
            <h2>Playlist</h2>
            <ul>
                { songCards }
            </ul>
        </div>
    )
}

export default Playlist;