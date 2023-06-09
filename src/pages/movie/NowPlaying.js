import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";

function NowPlaying() {
 const [movies,setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL =`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  async function fetchNowPlaying() {
    const response = await axios(URL);
    console.log(response)

    setMovies(response.data.results);
  }
  useEffect(function (){
    fetchNowPlaying();

  },[]);

    return (
    <div>
      <Hero/>
      <Movies movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default NowPlaying;