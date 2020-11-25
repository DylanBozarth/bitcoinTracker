import "./App.css";
import React, { useState, useEffect } from "react";

const Bitcoin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://blockchain.info/ticker") // Call the fetch function passing the url of the API as a parameter
      .then((resp) => resp.json()) // Transform the data into json
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);
  if (data !== null) {
    return (
      <div className="App">
        <header className="container-fluid">
          <div className="col-sm-4 bitcoin">
          <img
            src="./bitcoin.png"
            width="100px"
            height="100px"
            className="img-fluid"
          ></img>
          1 Bitcoin = ${data.USD.buy} {" "}
        </div></header>
      </div>
    );
  } else return <h1>Loading...</h1>;
};

export default Bitcoin;
