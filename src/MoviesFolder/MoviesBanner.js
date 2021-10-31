import React from "react";
import { useState, useEffect } from "react";
import "./MoviesBanner.css";

export default function MoviesBanner() {
  const [heroImage, setHeroImage] = useState([]);

  const rating = (n, str) => {
    let string = "";
    for (let i = 0; i < n; i++) {
      string += str;
    }
    return string;
  };
  console.log(rating(2, "M"));

  const API_KEY = "c3d4ca9e26c843f6cb1c652d96c167dc";

  useEffect(() => {
    async function fetchHeroImage() {
      let response = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
      );
      const data = await response.json();
      setHeroImage(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
    }
    fetchHeroImage();
  }, []);

  console.log(heroImage);

  return (
    <div
      className="movie-banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          heroImage?.backdrop_path || heroImage?.poster_path
        })`,
        backgorundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="movie-banner-info">
        <div className="movie-banner-title">
          <h1>{heroImage?.title || heroImage?.name}</h1>
          <h4>All the Movies you Love in one place....</h4>
          <p>Rating: {rating(Math.floor(heroImage?.vote_average), "⭐")}</p>
        </div>

        <div className="movie-banner-btns">
          <button>Play Me</button>
          <button>Add to my List</button>
        </div>
      </div>
    </div>
  );
}
