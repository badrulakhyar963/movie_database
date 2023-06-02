import StyledMovie from "./movie.styled";


function Movie(props) {

    const {movie} = props;

    return(
        <StyledMovie>
            <img src={movie.poster} alt=""></img>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </StyledMovie>
    )
}

export default Movie;