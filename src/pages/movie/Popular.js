import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";
import ENDPOINTS from "../../components/utils/constant/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

function PopularMovie() {
  //  Buat dispatch
  const dispatch = useDispatch();

  async function fetchPopularMovie() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(response.data.results));
  }
  useEffect(function () {
    fetchPopularMovie();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
