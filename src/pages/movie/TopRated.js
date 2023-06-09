import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";

function TopRated() {
 const [movies,setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  async function fetchTopRated() {
    const response = await axios(URL);
    console.log(response)

    setMovies(response.data.results);
  }
  useEffect(function (){
    fetchTopRated();

  },[]);

    return (
    <div>
      <Hero/>
      <Movies movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default TopRated;