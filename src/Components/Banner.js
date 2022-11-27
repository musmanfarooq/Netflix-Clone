import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../API/Request";
import axios from "../API/Axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundImage: `url("${baseURL}${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <h1 className="banner__description">
            {truncate(`(${movie?.overview})`, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
