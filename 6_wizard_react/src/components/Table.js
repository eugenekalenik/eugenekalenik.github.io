import React from 'react';


const Table = (props) => {
  const { cars } = props;

  return (
    <div className="table-responsive mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Transmission</th>
            <th>Gaz</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.transmissionType}</td>
              <td>{car.fuelType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;