import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import MovieCard from "../../Components/MovieCard";
import styles from "./.module.css";
import useMovies from "../../Hooks/useMovies";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";

const Home = () => {
  
  let API_key = "&api_key=db95773a7fb212ba790d71f6adac0e7e";
  let base_url = "https://api.themoviedb.org/3";
  let url = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`;
  let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];
  const [url_set, setUrl] = useState(url);
  const { movieData } = useMovies(url_set);
  // to choose Movies Type
  const getData = (movieType) => {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType === "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType === "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType === "Comedie") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  return (
    <>
      {/* BAR TO CHOOSE MOVIES TYPE */}
      <div className={` ${styles.header} mb-5 bg-gradient`}>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <ul>
                {arr.map((value, pos) => {
                  return (
                    <li className="my-4"
                    key={pos}>
                      <a
                        href={`#${value}`}
                        name={value}
                        onClick={(e) => {
                          getData(e.target.name);
                        }}
                      >
                        {value}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* TO DISPLAY MOVIES */}
      <div className={`${styles.container} mx-auto mb-5`}>
        {movieData.length === 0 ? (
          <Loading />
        ) : (
          movieData.map((res, pos) => {
            return <MovieCard info={res} key={pos} />;
          })
        )}
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
export default Home;
