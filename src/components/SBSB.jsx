import React from "react";
import { useState } from "react";
import SearchBar from "./searchBar";
import SuggestionBar from "./suggestionBar";
import "./styles/SBSB.css";

const SBSB = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [found, setFound] = useState(true);
  const [correct, setCorrect] = useState();

  const key = "31dd0622";
  let Movieurl = `http://www.omdbapi.com/?t=${value}&apikey=${key}`;
  let Grammarurl = `https://api.textgears.com/grammar?text=${value}&language=en-GB&whitelist=&dictionary_id=&ai=0&key=BLCDtfeO1O2vSz7e`;

  const clickHandler = () => {
    setValue(correct[0]);
  };
  fetch(Grammarurl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Process the data from the API response
      setCorrect(data.response.errors[0].better); // Replace this with your desired logic
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  console.log(correct);

  return (
    <div>
      <SearchBar
        url={Movieurl}
        value={value}
        setValue={setValue}
        setData={setData}
        setFound={setFound}
      />
      {true ? <SuggestionBar data={data} Found={found} /> : ""}
      {found ? (
        ""
      ) : (
        <p className="Suggestion">
          Data Not Found!!! did you mean{" "}
          {undefined ? (
            ""
          ) : (
            <button className="corrected" onClick={clickHandler} alt="no found">
              {correct[0]}
            </button>
          )}
        </p>
      )}
    </div>
  );
};

export default SBSB;
