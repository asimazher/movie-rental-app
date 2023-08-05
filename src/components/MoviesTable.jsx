import { Link } from "react-router-dom";
import Like from "./common/Like";


const MoviesTable = ({ paginateMovies, onLike, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Rate</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paginateMovies.map((movie) => (
          <tr key={movie._id}>
            <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
            <td>{movie.genre.name}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>{movie.numberInStock}</td>
            <td>
              {" "}
              <Like
                liked={movie.liked}
                onHeartClick={() => onLike(movie)}
              />{" "}
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
