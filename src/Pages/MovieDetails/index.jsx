import useMovieDetails from "../../Hooks/useMovieDetails";
import styles from "./.module.css";
const MoviedDetails = () => {
  const { movieData, img_path } = useMovieDetails();
  return (
    <>
      <div className="text-center container ">
        <h4
          className={`${styles.borderTitle}
          text-white py-4 fs-3 
          w-75 mb-5 m-auto`}
        >
          {movieData?.title}
        </h4>
        <div className="mx-auto mb-4  ">
          <img
            src={img_path + movieData?.poster_path}
            alt={movieData?.title}
            className={`${styles.imgHeight}
             w-100 mb-3 rounded-5`}
          />
        </div>
        <div
          className="d-flex text-capitalize
            flex-wrap text-white 
            opacity-50 justify-content-center"
        >
          <div className="px-5">
            <h5 className="text-white">
              Language:
              <p className="text-uppercase">{movieData?.original_language}</p>
            </h5>
            <h5>
              Release Date: <p>{movieData?.release_date}📅</p>
            </h5>
          </div>
          <div className="px-5">
            <h5>
              Rating: <p>{(movieData?.vote_average * 10).toFixed()}%⭐</p>
            </h5>
            <h5>
              Vote count: <p>{movieData?.vote_count}</p>
            </h5>
          </div>

          <h5 className={`${styles.content} m-4 fs-5`}>
            The Story:
            <p>{movieData?.overview}</p>
          </h5>
        </div>
      </div>
    </>
  );
};
export default MoviedDetails;
