import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/movies/Movies";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../feature/movieSlice";

function Detail() {
  const params = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [params.id]);

  async function getRecommendationMovies() {
    const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    const response = await axios(URL);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <DetailMovie />
      <Movies title="Recommendation" />
    </div>
  );
}
export default Detail;
