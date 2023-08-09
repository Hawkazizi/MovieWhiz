import "./styles/searchBar.css";

const SearchBar = (props) => {
  const changeHandler = (event) => {
    props.setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (props.value.length <= 0) {
      console.log("Please enter a value");
    } else {
      fetch(props.url)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.Response === "True") {
            // Do something with the fetched data
            props.setData(data);
            console.log(data);
            console.log(data.Title);
            console.log(data.Year);
            console.log(data.Rated);
            console.log(data.Released);
            console.log(data.Runtime);
            console.log(data.Actors);
            console.log(data.Country);
            console.log(data.Director);
            console.log(data.Genre);
            console.log(data.Language);
            console.log(data.Poster);
            console.log(data.Plot);
            console.log(data.imdbRating);
            console.log(data.imdbVotes);
            props.setFound(true);
          } else {
            props.setFound(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="search-container">
        <input
          type="text"
          id="movie-search"
          placeholder="Search for movies..."
          value={props.value}
          onChange={changeHandler}
        />
        <button id="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
