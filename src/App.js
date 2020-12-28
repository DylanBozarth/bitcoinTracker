import "./App.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pagetransition = {
  duration: 1.5,
};
const floatIn1 = {
  in: {
    y: 0
  },
  out: {
    y: '200vh'
  },
}
const floatTransition = {
  duration: 1.2
}
const floatTransition2 = {
  duration: 1.5
}
const floatTransition3 = {
  duration: 1.7
}
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
      <motion.div initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition} className="App container text-center homepagebox">
        <div className="row ">
          <motion.div initial="out"
      animate="in"
      exit="out"
      variants={floatIn1}
      transition={floatTransition} className="col-sm-4 bitcoin ">
            <img
              src="./bitcoin.png"
              width="100px"
              height="100px"
              className="img-fluid"
              alt="bitcoin"
            ></img>
            1 Bitcoin = ${data.USD.buy}{" "}
          </motion.div>
          <motion.div className="col-sm-4 bitcoin" initial="out"
      animate="in"
      exit="out"
      variants={floatIn1}
      transition={floatTransition2}>
            <img
              src="./eth.png"
              width="100px"
              height="100px"
              className="img-fluid"
              alt="eth"
            ></img>
            1 Ethereum = ${ethData.ethereum.usd}{" "}
          </motion.div>
          <motion.div className="col-sm-4 bitcoin" initial="out"
      animate="in"
      exit="out"
      variants={floatIn1}
      transition={floatTransition3}>
            <img
              src="./doge.png"
              width="100px"
              height="100px"
              alt="doge"
              className="img-fluid"
            ></img>
            1 LiteCoin = ${liteData.litecoin.usd}
          </motion.div>
        </div>
      </motion.div>
    );
  } else return <h1>Loading...</h1>;
};

export default Bitcoin;
