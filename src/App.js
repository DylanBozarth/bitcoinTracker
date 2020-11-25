
import React, {useState, useEffect} from 'react'

import './App.css';



function Bitcoin() {
  
  fetch('https://blockchain.info/ticker') // Call the fetch function passing the url of the API as a parameter
  .then((resp) => resp.json()) // Transform the data into json
.then(function(resp) {
    setData({data: resp.json()})
    console.log(data)
    
})
  
const [data, setData] = useState();
  return (
    <div className="App">
      <header className="App-header">
        
       
      
        
      </header>
    </div>
  );
}

export default Bitcoin;