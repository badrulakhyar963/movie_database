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
                        <li className={stayle.navbar__item}>Home</li>
                        <li className={stayle.navbar__item}>Add movie</li>
                        <li className={stayle.navbar__item}>Popular</li>
                        <li className={stayle.navbar__item}>Now Playing</li>
                        <li className={stayle.navbar__item}>Top Rated</li>
                    </ul>
                </div>
            
            
            </nav>
        </div>
    );
}

export default Navbar;