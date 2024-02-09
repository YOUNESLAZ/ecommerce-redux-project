import { Button } from "react-bootstrap";
import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieList = () => {
    const MovieLists = useSelector((state)=>state.MoviesReducer.MoviesList);
  return (
    <div>
      <div>
        <Link to="/AddMovie">
          <Button>Add New Movie</Button>
        </Link>
      </div>
      <div>
        {MovieLists.map((e) => (
          <MovieCard e={e} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
