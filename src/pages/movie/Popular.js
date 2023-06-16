import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";
import ENDPOINTS from "../../components/utils/constant/endpoint";

function PopularMovie() {
 const [movies,setMovies] = useState([]);

  async function fetchPopularMovie() {
    const response = await axios(ENDPOINTS.POPULAR);
    console.log(response)

    setMovies(response.data.results);
  }
  useEffect(function (){
    fetchPopularMovie();

  },[]);

    return (
    <div>
      <Hero/>
      <Movies title="Popular Movies" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default PopularMovie;