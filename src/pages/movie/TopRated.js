import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";
import ENDPOINTS from "../../components/utils/constant/endpoint";

function TopRated() {
 const [movies,setMovies] = useState([]);

  async function fetchTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    console.log(response)

    setMovies(response.data.results);
  }
  useEffect(function (){
    fetchTopRated();

  },[]);

    return (
    <div>
      <Hero/>
      <Movies title="Top Rated Movies" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default TopRated;