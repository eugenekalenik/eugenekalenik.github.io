import React from 'react';


const Page = (props) => {
  const { step, steps, make, model, transmission, fuelType } = props.state;

  return (
    <div className="row mt-4 mb-4">
      <div className="col-2">
        {step !== steps.indexOf(2) && <span className="step-number bg-secondary">{step + 1}</span>}
        {step === steps.indexOf(2) && <span className="step-number-done bg-primary"><span className="check-mark"></span></span>}
      </div>
      <div className="col-10">
        <h5 className="mb-4">{steps[step]}</h5>
      </div>
      <div className="col-2"></div>
      <div className="col-10 page">
        {step === 0 && <ul className="list-group">
          <li className={make === 'Alfa Romeo' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeMake}>Alfa Romeo</li>
          <li className={make === 'Bentley' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeMake}>Bentley</li>
          <li className={make === 'Cadillac' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeMake}>Cadillac</li>
        </ul>}
        {step === 1 && make === 'Alfa Romeo' && <ul className="list-group">
          <li className={model === 'Brera' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Brera</li>
          <li className={model === 'Giulia' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Giulia</li>
          <li className={model === 'Spider' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Spider</li>
        </ul>}
        {step === 1 && make === 'Bentley' && <ul className="list-group">
          <li className={model === 'Azure' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Azure</li>
          <li className={model === 'Continental' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Continental</li>
          <li className={model === 'Mulsanne' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Mulsanne</li>
        </ul>}
        {step === 1 && make === 'Cadillac' && <ul className="list-group">
          <li className={model === 'Allante' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Allante</li>
          <li className={model === 'Deville' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Deville</li>
          <li className={model === 'Eldorado' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeModel}>Eldorado</li>
        </ul>}
        {step === 2 && <ul className="list-group">
          <li className={transmission === 'Manual gearbox' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeTransmission}>Manual gearbox</li>
          <li className={transmission === 'Semi-automatic' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeTransmission}>Semi-automatic</li>
          <li className={transmission === 'Automatic transmission' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeTransmission}>Automatic transmission</li>
        </ul>}
        {step === 3 && <ul className="list-group">
          <li className={fuelType === 'Petrol' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeFuelType}>Petrol</li>
          <li className={fuelType === 'Diesel' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeFuelType}>Diesel</li>
          <li className={fuelType === 'Electric' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeFuelType}>Electric</li>
          {/* <li className={fuelType === 'Hybrid (petrol/electric)' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeFuelType}>Hybrid (petrol/electric)</li> */}
          {/* <li className={fuelType === 'Hybrid (diesel/electric)' ? 'list-group-item active' : 'list-group-item'} onClick={props.onChangeFuelType}>Hybrid (diesel/electric)</li> */}
        </ul>}
        {step === 4 && <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusamus minima repudiandae maiores. Temporibus nostrum iste ullam recusandae, reprehenderit numquam, autem ea error reiciendis ut facere optio voluptate dicta impedit?
        </p>}
      </div>
    </div>
  )
}

export default Page;