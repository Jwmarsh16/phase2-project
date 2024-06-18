import {useSate, useState} from "react";

function AddSong() {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')

    return (
        <div>
            <h2>Add a New Song</h2>
            <form className="add song">
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="artist">Artist: </label>
                    <input type="text" name="artist" id="artist" />
                </div>
                <div>
                    <label htmlFor="album">Album: </label>
                    <input type="text" name="album" id="album" />
                </div>
            </form>
        </div>
    )
}

export default AddSong;

