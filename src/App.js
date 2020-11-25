import "./App.css";
import React, { useState, useEffect } from "react";

const Bitcoin = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://blockchain.info/ticker") // Call the fetch function passing the url of the API as a parameter
      .then((resp) => resp.json()) // Transform the data into json
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default Bitcoin;