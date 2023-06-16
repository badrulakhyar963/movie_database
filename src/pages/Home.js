
import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import data from "../components/utils/constant/data";
// import Counter from "../components/counter";


function Home() {

    const [movies, setMovies] = useState(data);

    return (
        <div>
           <Hero />
            <Movies title="Lates Movies" movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies}/>
        </div>
    );

    // return(
    //     <Counter/>
    // )
}

export default Home;