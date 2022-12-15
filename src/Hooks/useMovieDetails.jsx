import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useMovieDetails = () => {
    const params = useParams();
    let API_key = "?api_key=db95773a7fb212ba790d71f6adac0e7e";
    let base_url = "https://api.themoviedb.org/3";
    let url = `${base_url}/movie/${params.id}${API_key}`;
    let img_path = "https://image.tmdb.org/t/p/w500";

    const [movieData, setMovieData] = useState({});
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setMovieData(json);
        });
    }, [url]);
    return {movieData,img_path}
};
export default useMovieDetails;