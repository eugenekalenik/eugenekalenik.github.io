import React from 'react';


const Buttons = (props) => {
  const { step } = props;

  if (step === 1) {
    return (
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={props.onPrevClick} disabled>Prev</button>
        <button className="btn btn-primary" onClick={props.onNextClick}>Next</button>
      </div>
    )
  }

  if (step === 4) {
    return (
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={props.onPrevClick}>Prev</button>
        <button className="btn btn-success" onClick={props.onAddCar}>Add car</button>
      </div>
    )
  }

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={props.onPrevClick}>Prev</button>
      <button className="btn btn-primary" onClick={props.onNextClick}>Next</button>
    </div>
  )
}

export default Buttons;