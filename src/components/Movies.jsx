import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";


const Movies = () => {

  const [ movies, setMovies] =  useState(getMovies())

 // useEffect
  //const movies = getMovies();

  const handleLike = (movie) => {
    const likedmovies = [ ...movies ]
    const index = movies.indexOf(movie)
    likedmovies[index] = { ...movies[index] }
    likedmovies[index].liked = !likedmovies[index].liked
    setMovies( likedmovies )

  }

  const handleDelete = (movie) => {
    const updatedMovies = movies.filter(mov => mov._id !== movie._id)
    setMovies( updatedMovies )
  }
  
  return (
    <div>
      <h2>Movies Component</h2>
      <p>Showing {movies.length} movies in the database.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rate</th>
            <th>Stock</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>{movie.numberInStock}</td>
              <td> <Like liked={movie.liked} onHeartClick={() => handleLike(movie)} /> </td>
              <td><button onClick={() => handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
