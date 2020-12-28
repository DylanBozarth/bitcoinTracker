import "./App.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import  moment from 'moment'
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
function refreshPage() {
  window.location.reload(false);
}
const Bitcoin = () => {
  const [data, setData] = useState(null);
  const [ethData, setEthData] = useState(null);
  const [liteData, setLiteData] = useState(null);
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
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
            1 Bitcoin  <br />${data.USD.buy}{" "}
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
            1 Ethereum  <br />${ethData.ethereum.usd}{" "}
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
            1 LiteCoin  <br />${liteData.litecoin.usd}
          </motion.div>
        
        </div>
        <p className="price">Price as of: <br /> {time}</p>
        <button onClick={refreshPage}>Update my prices!</button>
      </motion.div>
    );
  } else return <h1>Loading...</h1>;
};

export default Bitcoin;
