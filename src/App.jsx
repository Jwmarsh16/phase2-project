import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Playlist from './components/Playlist';
import AddSong from './components/AddSong';
import { baseUrl } from "./globals";

function App() {
  const [songList, setSongList] = useState([]);

  function addNewSong(newSong) {
    setSongList([...songList, newSong]);
  }

  function deleteSong(id) {
    fetch(baseUrl + "/songs/" + id, {
      method: 'DELETE',
    })
    .then(() => {
      setSongList(songList.filter(song => song.id !== id));
    });
  }

  useEffect(() => {
    fetch(baseUrl + "/songs")
      .then(resp => resp.json())
      .then(data => setSongList(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist songList={songList} deleteSong={deleteSong} />} />
        <Route path="/add" element={<AddSong addNewSong={addNewSong} />} />
      </Routes>
    </Router>
  );
}

export default App;
