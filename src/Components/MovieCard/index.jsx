import { Link } from "react-router-dom";
import styles from "./.module.css";

const MovieCard = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className={`${styles.movie}`}>
        <img
          src={img_path + movie.info.poster_path}
          alt={movie.info.title}
          className={`${styles.poster}`}
        />
        <div className={`${styles.moviedDetails}`}>
          <div className={`${styles.box} bg-gradient`}>
            <h4 className={`${styles.title} fw-bold fs-6`}>
              {movie.info.title}
            </h4>
            <p className={`${styles.rating}`}>{movie.info.vote_average}</p>
          </div>
          <div className={`${styles.overview} bg-gradient`}>
            <h1>overview</h1>
            {movie.info.overview.split(" ").slice(0, 30).join(" ")}...
            <Link
              className="btn btn-primary btn-block w-100 px-2 fs-6 text-capitalize"
              to={`/${movie.info.id}`}
              key={movie.info.id}
            >
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
