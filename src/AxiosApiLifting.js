import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
const AxiosApiLifting = () => {

    const [data,setData]=useState(null);

    useEffect(()=>{
        axios.get('http://hn.algolia.com/api/v1/items/1')
        .then(response =>{
              setData(response.data);  
        }).catch(error =>{
            console.error('error in fetching the data',error);
        });
    }[]);
  return (
    <div>
      {data ? (<div><p>{data.author}</p>
      
      <p>{data.title}</p>
      <p>{data.points}</p>
      <p>{data.children[0].id}</p>
      </div>)
      :(<p>Loading...</p>)}
    </div>
  )
}

export default AxiosApiLifting;
