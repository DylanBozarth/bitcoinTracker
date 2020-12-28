import "./App.css";
import React, { useState, useEffect } from "react";

const Bitcoin = () => {
  const [data, setData] = useState(null);
  const [ethData, setEthData] = useState(null);
  const [liteData, setLiteData] = useState(null);
  useEffect(() => {
    fetch("https://blockchain.info/ticker") // Call the fetch function passing the url of the API as a parameter
      .then((resp) => resp.json()) // Transform the data into json
      .then((resp) => {
      
        setData(resp);
      });
     fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd') 
     .then((resp) => resp.json()) // Transform the data into json
      .then((resp) => {
        console.log(resp)
        setLiteData(resp);
      });
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd') 
      .then((resp) => resp.json()) // Transform the data into json
       .then((resp) => {
         console.log(resp)
         setEthData(resp);
       }); 
      
  }, []);
  if (data && liteData && ethData !== null) {
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
            1 Ethereum = ${ethData.ethereum.USD}{" "}
          </div>
          <div className="col-sm-4 bitcoin">
            <img
              src="./doge.png"
              width="100px"
              height="100px"
              alt="doge"
              className="img-fluid"
            ></img>
            1 LiteCoin = ${liteData.litecoin.usd}
          </div>
        </div>
      </div>
    );
  } else return <h1>Loading...</h1>;
};

export default Bitcoin;
