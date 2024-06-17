import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/playlist">Playlist</Link></li>
            <li><Link to="/add">Add Song</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;
