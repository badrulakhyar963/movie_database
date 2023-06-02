import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar () {
    return (
        <StyledNavbar>
            <nav>
                <div>
                <h1>MovieKu</h1>
                </div>
                <div>
                    <ul >
                        <li>
                            <Link  className="navbar__link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="movie/create">Add movie</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="movie/popular">Popular</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="movie/now">Now Playing</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to="movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>            
            </nav>
            </StyledNavbar>
    );
}

export default Navbar;