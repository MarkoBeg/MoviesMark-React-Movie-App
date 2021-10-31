import React from "react";
import MovieRow from "./MovieRow";
import movieAddress from "../ApiKeys";

export default function MovieRows() {
  return (
    <div>
      <MovieRow
        title="Popular Movies"
        movieURL={movieAddress.PopularMovies}
      ></MovieRow>
      <MovieRow
        title="Crime Movies"
        movieURL={movieAddress.CrimeMovies}
      ></MovieRow>
      <MovieRow
        title="Horror Movies"
        movieURL={movieAddress.HorrorMovies}
      ></MovieRow>
      <MovieRow
        title="Thriller Movies"
        movieURL={movieAddress.ThrillerMovies}
      ></MovieRow>
      <MovieRow
        title="ComedyMovies"
        movieURL={movieAddress.ComedyMovies}
      ></MovieRow>

      <MovieRow
        title="TV Rated TV"
        cardSize
        movieURL={movieAddress.TopRatedTV}
      ></MovieRow>

      <MovieRow
        title="FamilyMovies"
        movieURL={movieAddress.FamilyMovies}
      ></MovieRow>
      <MovieRow
        title="Animation Movies"
        movieURL={movieAddress.AnimationMovies}
      ></MovieRow>
      <MovieRow
        title="Adventure Movies"
        movieURL={movieAddress.AdventureMovies}
      ></MovieRow>
      <MovieRow
        title="History Movies"
        movieURL={movieAddress.HistoryMovies}
      ></MovieRow>
      <MovieRow
        title="TopRated Movies"
        movieURL={movieAddress.TopRatedMovies}
      ></MovieRow>
    </div>
  );
}
