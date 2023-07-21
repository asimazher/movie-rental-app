import Like from "./common/Like";


const MoviesTable = ({ paginateMovies, onLike, onDelete, onSort, sortColumn }) => {

    const raiseSort = ( path ) => {
        const newColumn = { ...sortColumn }
    if(newColumn.path === path){
      newColumn.order = (newColumn.order === 'asc') ? 'desc' : 'asc'
    }
    else {
      newColumn.path = path
      newColumn.order = 'asc'
    }
    onSort(newColumn)
    }

    const renderSortIcon = (path) => {

        if(path !== sortColumn.path) return null

        if(sortColumn.order === 'asc')
        return <i className="fa fa-sort-asc"></i>

        return <i className="fa fa-sort-desc"></i>
    }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="clickable" onClick={() => raiseSort('title')}> Title {renderSortIcon('title')} </th>
          <th className="clickable" onClick={() => raiseSort('genre.name')}>Genre {renderSortIcon('genre.name')} </th>
          <th className="clickable" onClick={() => raiseSort('dailyRentalRate')}>Rate {renderSortIcon('dailyRentalRate')} </th>
          <th className="clickable" onClick={() => raiseSort('numberInStock')}>Stock {renderSortIcon('numberInStock')} </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paginateMovies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
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
