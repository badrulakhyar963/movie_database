import { useEffect, useState } from "react";
import stayle from "./Hero.module.css"

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
        <div className={stayle.container}>
            <section className={stayle.hero}>
                <div className={stayle.hero__left}>
                    <h1 className={stayle.hero__title}>{movie.Title}</h1>
                    <h3 className={stayle.hero__genre}>Genre :{movie.Genre}</h3>
                    <p className={stayle.hero__description}>
                        {movie.Plot}
                    </p>
                    <button className={stayle.hero__button}>Tonton</button>
                </div >
                    
                <div className={stayle.hero__right}>
                <img className={stayle.hero__image} src={movie.Poster} alt={movie.Title}></img>
                </div>
            </section>
        </div>
    );
}

export default Hero;