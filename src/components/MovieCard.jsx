import React from "react";

export const MovieCard = ({ searchedMovie, deleteFunc, handleOnAddToTheList }) => {
  const { Poster, Title, imdbRating, Plot, mood } = searchedMovie;
  console.log(searchedMovie);

  return (
    <div className="container">
      <div className="row  border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating:{imdbRating}</p>
          <p>{Plot?.slice(0, 80)}...</p>
          {!mood && (
            <div className="d-flex justify-content-between">
              <button className="btn btn-warning" onClick={() => handleOnAddToTheList("Drama")}>
                Drama
              </button>
              <button className="btn btn-info" onClick={() => handleOnAddToTheList("Action")}>
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button onClick={deleteFunc} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
