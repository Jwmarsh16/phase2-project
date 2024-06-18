import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Playlist from './components/Playlist';
import AddSong from './components/AddSong';
import SongDetails from './components/SongDetails';
import { baseUrl } from "./globals";

function App() {
  const [playlist, setPlaylist] = useState([]); 

  useEffect(() => {
    fetch(baseUrl + "/songs")
      .then(resp => resp.json())
      .then(data => setPlaylist(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist playlist={playlist} />} />  
        <Route path="/add" element={<AddSong />} />
        <Route path="/songs/:id" element={<SongDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
