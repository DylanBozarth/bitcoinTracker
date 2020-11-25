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
     // document.title = `Bitcoin price is ${data.USD.buy}`;
  }, []);
if (data !== null) {
return ( 
  <div className="App">
      <header className="App-header">Bitcoin is {data.USD.buy}  </header>
    </div>
)} 
else return <h1>aaa</h1>
};

export default Bitcoin;
