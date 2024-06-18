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
  setSongList([...songList, newSong])
  };
  
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
        <Route path="/playlist" element={<Playlist songList={songList} />} />  
        <Route path="/add" element={<AddSong addNewSong={addNewSong} />} />
      </Routes>
    </Router>
  );
}

export default App;
