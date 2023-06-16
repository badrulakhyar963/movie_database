import Movie from "../movie/movie";
import stayle from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props){
    // destructing props
    const {title, movies, setMovies } = props;

    function tambahFilm() {
      const movie = {
        id: nanoid(8),
        title: "Fast Saga",
        year: 2023,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };
    //   menambahkan movie ke state movies
    // menggunakan spread operator untuk meng-copy dan merge array
      setMovies([...movies, movie]);
    }

    return(
        <div className={stayle.container}>
            <section className={stayle.movies}>
                <h2 className={stayle.movies__title}>{title}</h2>
                <div className={stayle.movie__container}>
                    {
                        movies.map(function(movie) {
                            return <Movie key={movie.id} movie={movie}/>
                        })
                    }
                </div>
                <button onClick={tambahFilm}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;