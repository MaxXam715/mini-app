import "./NavBar.scss";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="G-nav-bar">
            <div className="wrapper-container">
                <Link to="/" className="link-item active">Main</Link>
                <Link to="/" className="link-item">Earn</Link>
                <Link to="/" className="link-item">Frends</Link>
                <Link to="/" className="link-item">Airdrop</Link>
            </div>
        </nav>
    )
}