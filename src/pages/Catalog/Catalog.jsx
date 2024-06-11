import { useState, useEffect } from 'react';
import { getCars } from 'API/fetchApi.js';

import  Navigate  from "../../components/Navigate/Navigate";


export default function Catalog(){
    const [cars, setCars]=useState([])
    const [page, setPage]=useState(1)
    const data=async()=>{
      const cars=await getCars(1);
      console.log('cars', cars);
      console.log('cars', cars[1])
    //   setCars(cars)
    }
    data();
    return(
        <>
        <Navigate/>
            <h1>Catalog</h1>
        </>
    )
}