import React from "react";
import SongCard from './SongCard';

function Playlist({ songList }) {

    
    const songCards = songList.map(song => (<SongCard key={song.id} song={song}/>
    
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