import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/movies/Movies";
import Hero from "../../components/hero/Hero";
import ENDPOINTS from "../../components/utils/constant/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

function TopRated() {
  //  Buat dispatch
  const dispatch = useDispatch();

  async function fetchTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    console.log(response);
    dispatch(updateMovies(response.data.results));
  }
  useEffect(function () {
    fetchTopRated();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRated;
