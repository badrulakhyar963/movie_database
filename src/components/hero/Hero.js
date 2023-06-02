import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {

    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie(){
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
       const response = await fetch(url);
        const data = await response.json();
  
       setMovie(data);
    }
    fetchMovie();
},[]);
    
    return(
        <StyledHero>
            <section className="hero">
                <div className="hero__left">
                    <h1 className="hero__title">{movie.Title}</h1>
                    <h3 className="hero__genre">Genre :{movie.Genre}</h3>
                    <p className="hero__description">
                        {movie.Plot}
                    </p>
                    <Button variant="primary" sizes="md">Tonton</Button>
                </div >
                    
                <div className="hero__right">
                <img className="hero__image" src={movie.Poster} alt={movie.Title}></img>
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;