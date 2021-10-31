import React from "react";
import "./MovieRow.css";
import { useState, useEffect } from "react";
import Video from "../images/video.mp4";

export default function MovieRow({ title, movieURL, cardSize, video }) {
  const [movies, setMovies] = useState([]);

  const url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(movieURL);
      const data = await response.json();
      setMovies(data.results);
    }
    getMovies();
  }, [movieURL]);
  console.log(movies);

  const averageStars = (n, str) => {
    let string = "";
    for (let i = 0; i < n; i++) {
      string += str;
    }
    return string;
  };
  console.log(averageStars(4, "n"));

  const openVideo = (url) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    return newTab;
  };

  return (
    <div className="movie-row-section">
      <h1>{title}</h1>
      <div className="movie-row">
        {movies.map((item) => {
          return (
            <div className={`movie-card ${cardSize && "movieCardSize"}`}>
              <img
                onClick={() => openVideo(`${Video}`)}
                className={`movie-img ${cardSize && "movieImgSize"}`}
                key={item.id}
                src={`${url}${item?.poster_path || item?.backdrop_path}`}
                alt={item?.name}
              ></img>
              <p className="movieTitle">{item.title || item.name}</p>
              <p className="movieDate">
                {item?.release_date}
                <span className="movieDateSpan"> Release Date</span>
              </p>
              <p className="movieVote">
                {Math.floor(item?.popularity)} Popularity
              </p>
              <span className="movieAverage">
                Rating:
                {averageStars(Math.floor(item?.vote_average), "⭐")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
