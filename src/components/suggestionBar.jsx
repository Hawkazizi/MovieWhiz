import "./styles/suggestionBar.css";
import React from "react";

const SuggestionBar = (props) => {
  const { data } = props;
  if (props.Found === true) {
    // Check if the data is available and contains the required properties
    if (
      !data ||
      !data.Title ||
      !data.Year ||
      !data.Rated ||
      !data.Released ||
      !data.Runtime ||
      !data.Actors ||
      !data.Country ||
      !data.Director ||
      !data.Genre ||
      !data.Language ||
      !data.Poster ||
      !data.Plot ||
      !data.imdbRating ||
      !data.imdbVotes
    ) {
      return (
        <div>
          Oops! Something went wrong. Movie data is not available or incomplete.
        </div>
      );
    }

    const genres = data.Genre.split(", ");

    return (
      <div className="movie-container">
        <div className="header">
          <h2 className="title">{data.Title}</h2>
          <img src={data.Poster} alt="movie" className="poster" />
        </div>
        <div className="genre-container">
          {genres.map((genre, index) => (
            <span key={index} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
        <div className="info-container">
          <div className="info-item">
            <strong>Director:</strong> {data.Director}
          </div>
          <div className="info-item">
            <strong>Year:</strong> {data.Year}
          </div>
          <div className="info-item">
            <strong>Rated:</strong> {data.Rated}
          </div>
          <div className="info-item">
            <strong>Released:</strong> {data.Released}
          </div>
          <div className="info-item">
            <strong>Runtime:</strong> {data.Runtime}
          </div>
          <div className="info-item">
            <strong>Actors:</strong> {data.Actors}
          </div>
          <div className="info-item">
            <strong>Country:</strong> {data.Country}
          </div>
          <div className="info-item">
            <strong>Language:</strong> {data.Language}
          </div>
          <div className="info-item">
            <strong>IMDb Rating:</strong> {data.imdbRating}
          </div>
          <div className="info-item">
            <strong>IMDb Votes:</strong> {data.imdbVotes}
          </div>
        </div>
        <p className="plot">{data.Plot}</p>
      </div>
    );
  }
};

export default SuggestionBar;
