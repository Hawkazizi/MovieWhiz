import * as React from "react";
import "./styles/RatingTab.css";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useState } from "react";

const RatingTab = () => {
  const [ratings, setRatings] = useState({}); // Provide an initial value for the state

  const handleSliderChange = (genre, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [genre]: value }));
  };

  const handleSubmit = () => {
    console.log(ratings);
    const values = Object.values(ratings);

    if (values.length !== 9) {
      alert(
        "plz rate to all of the genres wwe need them all to give you better suggestions! thx"
      );
    } else {
      console.log(values);
    }
  };

  return (
    <div className="SuggestionBox">
      <Box sx={{ width: 500 }}>
        <Button variant="outlined">Comedy</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Comedy", value)}
        />
        <Button variant="outlined">Action</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Action", value)}
        />
        <Button variant="outlined">Sci-Fi</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Sci-Fi", value)}
        />
        <Button variant="outlined">Comedy</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Comedy", value)}
        />
        <Button variant="outlined">Drama</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Drama", value)}
        />
        <Button variant="outlined">Horror</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Horror", value)}
        />
        <Button variant="outlined">Classic</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Classic", value)}
        />
        <Button variant="outlined">Adventure</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Adventure", value)}
        />
        <Button variant="outlined">Documentary</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Documentary", value)}
        />

        {/* Repeat similar sections for other genres */}

        <Button variant="outlined">Animation</Button>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          onChange={(event, value) => handleSliderChange("Animation", value)}
        />

        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default RatingTab;
