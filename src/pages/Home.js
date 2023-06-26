import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";


function Home(props) {
    const {movies} = props;

    return (
        <div>
            <Hero/>
        <Movies movies = {movies}/>
        </div>
    )
}

export default Home;