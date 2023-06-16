import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";

function Hero() {
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) =>genre.name).join(", ");
    const idTrailer = movie && movie.videos.results[0].key;

    async function fetchTrendingMovie(){
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios(URL);

        return response.data.results[0];
    }

    async function getDetailMovie () {
        const trendingMovie = await fetchTrendingMovie();
        const id = trendingMovie.id;
        const URL =`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);

        setMovie(response.data);
    }
    useEffect (()=> {
        getDetailMovie();
    },[]);

    return(
        <StyledHero>
            <section className="hero">
                <div className="hero__left">
                    <h1 className="hero__title">{movie.title}</h1>
                    <h3 className="hero__genre">Genre :{genres}</h3>
                    <p className="hero__description">
                        {movie.overview}
                    </p>
                    <Button 
                    variant="primary" 
                    sizes="md" 
                    as="a" 
                    href={`https://www.youtube.com/watch?v=${idTrailer}`}
                    target="_blank">
                        Watch
                    </Button>
                </div >
                    
                <div className="hero__right">
                <img className="hero__image" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.Title}></img>
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;