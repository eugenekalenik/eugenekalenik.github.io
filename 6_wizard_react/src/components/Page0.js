import React from 'react';
import { data } from '../data';


const Page0 = (props) => {
  const { step } = props;

  const handleChange = (e) => console.log(e.target.value);

  return (
    <div className="mt-5 mb-5">
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select car brand</label>
        <select className="form-control" id="exampleFormControlSelect1" onChange={handleChange} name="brand">
          {data.cars.map(car => (
            <option key={car.id}>{car.brand.toLocaleUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Page0;