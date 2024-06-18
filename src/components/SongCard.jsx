import React from "react";

function SongCard({song}) {
    
    return (
        <li>
            <div>
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.album}</p>
            </div>
        </li>
    
        
    )
}

export default SongCard;