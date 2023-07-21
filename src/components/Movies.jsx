import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

const Movies = () => {

  const [ movies, setMovies ] =  useState(getMovies())

  const [ genre, setGenre ] =  useState([{name: "All Genres"}, ...getGenres()])

  const [ selectedGenre, setSelectedGenre ] =  useState({name: "All Genres"})

  const [ pageSize, setPageSize ] =  useState(5)

  const [ currentPage, setCurrentPage ] =  useState(1)

  const [ sortColumn, setSortColumn ] =  useState({ path: 'title', order: 'asc' })

  const fileredMovies = selectedGenre.name !== "All Genres" ? movies.filter(movie => movie.genre._id === selectedGenre._id) : movies

  const sorted = _.orderBy( fileredMovies, [sortColumn.path], [sortColumn.order])

  const paginateMovies = paginate(sorted, currentPage, pageSize)


 // useEffect
  //const movies = getMovies();

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

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

  const handleSort = (newColumn) => {
    
    setSortColumn( newColumn )
  }  
  
  return (
    <div className="row">
      <div className="col-2">
        < ListGroup items={genre} onItemSelect={handleGenreSelect} selectedItem= {selectedGenre} />
      </div>
      <div className="col">
      <h2>Movies Component</h2>
      <p>Showing {fileredMovies.length} movies in the database.</p>
      < MoviesTable paginateMovies={paginateMovies} onLike={handleLike} onDelete={handleDelete} onSort={handleSort} sortColumn={sortColumn} />
      <Pagination itemsCount= {fileredMovies.length} pageSize= {pageSize} onPageChange= {handlePageChange} currentPage= {currentPage} />
      </div>
    </div>
  );
};

export default Movies;
