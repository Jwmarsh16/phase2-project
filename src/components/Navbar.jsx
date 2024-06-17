import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/playlist">Playlist</Link>
            <Link to="/add">Add Song</Link>
        </nav>
    )
}

export default Navbar;