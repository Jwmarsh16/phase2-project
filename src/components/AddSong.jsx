import { useState } from "react";
import { baseUrl } from "../globals";

function AddSong({addNewSong}) {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch(baseUrl + "/songs", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, artist, album })
        })
        .then(resp => resp.json())
        .then(newSong => {
            addNewSong(newSong)
            setTitle('')
            setArtist('')
            setAlbum('')
        })

    }

    return (
        <div>
            <h2>Add a New Song</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="artist">Artist: </label>
                    <input type="text" name="artist" id="artist" value={artist}
                    onChange={(e) => setArtist(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="album">Album: </label>
                    <input type="text" name="album" id="album" value={album}
                    onChange={(e) => setAlbum(e.target.value)}/>
                </div>
                <input type="submit" value="Add Song" />
            </form>
        </div>
    )
}

export default AddSong;

