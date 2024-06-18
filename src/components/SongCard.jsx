import React from "react";

function SongCard({song}) {
    
    return (
        <li>
            <div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
                <p>{song.album}</p>
            </div>
        </li>
    
        
    )
}

export default SongCard;