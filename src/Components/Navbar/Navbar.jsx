import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h3>Encrypted File Repo</h3>
            <div className="nav__elements">
                <Link to="/">Encrypt</Link>
                <Link to="/files">My Files</Link>
            </div>
        </div>
     );
}
 
export default Navbar;