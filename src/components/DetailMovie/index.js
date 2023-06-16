import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../ui/Button";
import StyleDetailMovie from "./DetailMovie.styled";

function DetailMovie() {
  const [movie, setMovie] = useState("");
  const params = useParams();
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  useEffect(() => {
    getDetailMovie();
  }, [params.id]);

  async function getDetailMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  return (
    <StyleDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.Title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>Genre :{genres}</h3>
        <p>{movie.overview}</p>
        <Button
          variant="primary"
          sizes="md"
          as="a"
          href={`https://www.youtube.com/watch?v=${idTrailer}`}
          target="_blank"
        >
          Watch
        </Button>
      </div>
    </StyleDetailMovie>
  );
}
export default DetailMovie;
