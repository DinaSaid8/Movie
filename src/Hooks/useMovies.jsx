import { useEffect, useState } from "react";
const useMovies = (url) => {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMovieData(data.results);
        });
    }, [url]);
  return {movieData}
};
export default useMovies;