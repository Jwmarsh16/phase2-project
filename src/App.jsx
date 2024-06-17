import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Playlist from './components/Playlist';
import AddSong from './components/AddSong';
import SongDetails from './components/SongDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/songs/:id" element={<SongDetails />} />
      </Routes>
    </Router>
  );
}

export default App;