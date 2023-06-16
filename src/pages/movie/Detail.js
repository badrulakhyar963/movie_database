import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/movies/Movies";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getRecommendationMovies();
  }, [params.id]);

  async function getRecommendationMovies() {
    const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <div>
      <DetailMovie />
      <Movies title="Recommendation"movies={movies} />
    </div>
  );
}
export default Detail;
