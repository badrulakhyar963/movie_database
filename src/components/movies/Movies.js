import stayle from "./Movies.module.css";

function Movies(){
    return(
        <div className={stayle.container}>
            <section className={stayle.movies}>
                <h2 className={stayle.movies__title}>lates Movie</h2>
                <div className={stayle.movie__container}>
                <div className={stayle.movie}>
                        <img className={stayle.movie__image} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Detective_Knight_Independence_poster.png/220px-Detective_Knight_Independence_poster.png" alt=""></img>
                        <h3 className={stayle.movie__title}>Detective Knight: Independence</h3>
                        <p className={stayle.movie__date}>2023</p>
                    </div>
                    
                    <div className={stayle.movie}>
                        <img className={stayle.movie__image} src="https://upload.wikimedia.org/wikipedia/id/thumb/5/54/Avatar_The_Way_of_Water_poster.jpg/220px-Avatar_The_Way_of_Water_poster.jpg" alt=""></img>
                        <h3 className={stayle.movie__title}>Avatar: The Way of Water</h3>
                        <p className={stayle.movie__date}>2022</p>
                    </div>

                    <div className={stayle.movie}>
                        <img className={stayle.movie__image} src="https://upload.wikimedia.org/wikipedia/id/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg" alt=""></img>
                        <h3 className={stayle.movie__title}>Black Panther: Wakanda Forever</h3>
                        <p className={stayle.movie__date}>2022</p>
                    </div>

                    <div className={stayle.movie}>
                        <img className={stayle.movie__image} src="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/The_Man_from_Toronto_%282022_film%29.jpg/220px-The_Man_from_Toronto_%282022_film%29.jpg" alt=""></img>
                        <h3 className={stayle.movie__title}>The Man from Toronto</h3>
                        <p className={stayle.movie__date}>2022</p>
                    </div>
                    
                    <div className={stayle.movie}>
                        <img className={stayle.movie__image} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/JurassicWorldDominion_Poster.jpeg/220px-JurassicWorldDominion_Poster.jpeg" alt=""></img>
                        <h3 className={stayle.movie__title}>Jurassic World Dominion</h3>
                        <p className={stayle.movie__date}>2022</p>
                    </div>

                    <div className={stayle.movie}>
                        <img className={stayle.movie__image} src="https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg" alt=""></img>
                        <h3 className={stayle.movie__title}>Avengers: Endgame</h3>
                        <p className={stayle.movie__date}>2019</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movies;