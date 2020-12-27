import "./App.css";
import React, { useState, useEffect } from "react";

const Bitcoin = () => {
  const [data, setData] = useState(null);
  const [EthData, setEthData] = useState(null);
  const [dogeData, setDogeData] = useState(null);
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
      <div className="App container text-center homepagebox">
        <div className="row ">
          <div className="col-sm-4 bitcoin ">
            <img
              src="./bitcoin.png"
              width="100px"
              height="100px"
              className="img-fluid"
              alt="bitcoin"
            ></img>
            1 Bitcoin = ${data.USD.buy}{" "}
          </div>
          <div className="col-sm-4 bitcoin">
            <img
              src="./eth.png"
              width="100px"
              height="100px"
              className="img-fluid"
              alt="eth"
            ></img>
            1 Etherium = ${EthData}{" "}
          </div>
          <div className="col-sm-4 bitcoin">
            <img
              src="./doge.png"
              width="100px"
              height="100px"
              alt="doge"
              className="img-fluid"
            ></img>
            1 DogeCoin = ${dogeData}{" "}
          </div>
        </div>
      </div>
    );
  } else return <h1>Loading...</h1>;
};

export default Bitcoin;
