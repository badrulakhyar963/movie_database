import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";
import ENDPOINTS from "../../components/utils/constant/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

function NowPlaying() {
  //  Buat dispatch
  const dispatch = useDispatch();

  async function fetchNowPlaying() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    console.log(response);
    dispatch(updateMovies(response.data.results));
  }
  useEffect(function () {
    fetchNowPlaying();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlaying;
