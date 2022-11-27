import React from "react";
import requests from "../../API/Request";
import Banner from "../Banner";
import "./HomeScreen.css";
import NavBar from "../NavBar";
import Row from "../Row";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentariesMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default HomeScreen;
