import { useState, useEffect } from 'react';
import { getCars } from 'API/fetchApi.js';

import  Navigate  from "../../components/Navigate/Navigate";
import CarList from 'components/Carlist/CarList';

export default function Catalog(){
    const [cars, setCars]=useState([])
    const [page, setPage]=useState(1)
    const [models,setModels]=useState([])
    useEffect(()=>{
        const data=async()=>{
          const cars=await getCars(1);
          console.log('cars', cars);
          console.log('cars', cars[1])
          setCars(cars)
        }
        data();

    },[page])
useEffect(()=>{
    const allCars=async()=>{
        const data=await getCars(0)
        console.log('data', data);
        const models=[...new Set(data.map(car=>car.make))]
        console.log('models', models)
    setModels(models)
    }
    allCars();

},[])   
   
     function handleChange(event){
        console.log('event.target.value', event.target.value)
     }
    return(
        <>
        <Navigate/>
        <div>
            <label htmlFor="models">Model</label>
            <select id="models" value={models}>
                <option value="">Select model</option>
                {
                    models.map((model,index)=>(
                        <option key={index} value={model}>{model}</option>
                    ))
                }
            </select>
        </div>
            <ul>
                {cars.map((car)=>(
                    <li>{CarList(car)}</li>
                ))}
            </ul>
        </>
    )
}

/**
   const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dynamic-options">Choose an option:</label>
      <select id="dynamic-options" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

 * 
 */