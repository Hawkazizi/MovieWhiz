const input = "inteestellar";
const url = `https://api.textgears.com/grammar?text=${input}&language=en-GB&whitelist=&dictionary_id=&ai=0&key=BLCDtfeO1O2vSz7e`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Process the data from the API response
    console.log(data.response.errors[0].better); // Replace this with your desired logic
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
