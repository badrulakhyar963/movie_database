import stayle from "./Movie.module.css"



function Movie(props) {

    const {movie} = props;

    return(
        <div className={stayle.movie}>
            <img className={stayle.movie__image} src={movie.poster} alt=""></img>
            <h3 className={stayle.movie__title}>{movie.title}</h3>
            <p className={stayle.movie__date}>{movie.year}</p>
        </div>
    )
}

export default Movie;