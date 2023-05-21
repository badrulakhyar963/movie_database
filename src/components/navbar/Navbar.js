import { Link } from "react-router-dom";
import stayle from "./Navbar.module.css";

function Navbar () {
    return (
        <div className={stayle.container}>
            <nav className={stayle.navbar}>
                <div>
                <h1 className={stayle.navbar__brand}>MovieKu</h1>
                </div>

                <div>
                    <ul className={stayle.navbar__list}>
                        <li className={stayle.navbar__item}>
                            <Link className={stayle.navbar__link} to="/">Home</Link>
                        </li>
                        <li className={stayle.navbar__item}>
                            <Link className={stayle.navbar__link} to="movie/create">Add movie</Link>
                        </li>
                        <li className={stayle.navbar__item}>
                            <Link className={stayle.navbar__link} to="movie/popular">Popular</Link>
                        </li>
                        <li className={stayle.navbar__item}>
                            <Link className={stayle.navbar__link} to="movie/now">Now Playing</Link>
                        </li>
                        <li className={stayle.navbar__item}>
                            <Link className={stayle.navbar__link} to="movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            
            
            </nav>
        </div>
    );
}

export default Navbar;