import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";
import ENDPOINTS from "../../components/utils/constant/endpoint";

function NowPlaying() {
 const [movies,setMovies] = useState([]);

  async function fetchNowPlaying() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    console.log(response)

    setMovies(response.data.results);
  }
  useEffect(function (){
    fetchNowPlaying();

  },[]);

    return (
    <div>
      <Hero/>
      <Movies title="Now Playing Movies" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default NowPlaying;