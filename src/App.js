import React from "react";
import {useState,useEffect} from 'react';
import axios from "axios";
import "./App.css";



function App() {
  

  const [product, setProduct] = useState([]);
  
  const [input, setInput] = useState('');

 
function DataLoaded() {
  let productList = [];
  for (const [key, value] of Object.entries(product)) {
    productList.push(<div key={key}>
      <div className="item-image"> <img src ={value.Image} alt = {value.Name} ></img> </div>
       <div className="Item-box"> <a href = {value.Link} target="_blank"><h1>Purchase Link</h1></a>
                                    <h1>{value.Name}  </h1>
                                    <h1>{value.Price} </h1> 
                                    <h1>{value.Rating}</h1> </div>
                                    </div>)
  }
  return productList;
}

function DataLoading()  {
  return <h1>  </h1>
}

function fetchData() {
  if (product.length == 0) {
    return <DataLoading/>
  } else return <DataLoaded/>
}





function getData() {
  axios.get('https://hm26rbmjf3.execute-api.us-east-2.amazonaws.com/prod/data', {
    params: {
      data: input
    },
    crossdomain: true // pass the crossdomain property as part of the second parameter
  })
  .then(res => {
    console.log(res);
    setProduct(res.data);
  })
  .then(() => {
    fetchData();
  });
}





  useEffect(() => {



  }, []);

  return (
    <div>
      <div className="title"> Amazon WebScraper (Canada)</div>
      <div className="search-button"> 
      <input className="input" type="text" onInput={e => setInput(e.target.value)}/>
      <button className="button" onClick={() => getData()}>Search</button>
                                                        </div>

         <div className="container">  <div className="head">
         {/* <h1>Product</h1>
         <h1>Rating</h1>
         <h1>Price</h1>
         <h1>Link</h1> */}
         </div>
         {fetchData()}</div>
  </div>
      
  );
}

export default App;