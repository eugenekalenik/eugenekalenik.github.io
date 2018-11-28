import React from 'react';


const Buttons = (props) => {
  const { step, make, model, transmission, fuelType } = props.state;

  const isNextButtonDesabled = () => {
    return (step === 0 && make === '') || (step === 1 && model === '') || (step === 2 && transmission === '') || (step === 3 && fuelType === '');
  }

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-10">
        <div className="d-flex">
          {step > 0 && <button className="btn btn-light mr-2" onClick={props.onPrev}>Prev</button>}
          {step !== 4 && <button className="btn btn-primary" onClick={props.onNext} disabled={isNextButtonDesabled()}>Next</button>}
          {step === 4 && <button className="btn btn-success" onClick={props.onReset}>Add car</button>}
        </div>
      </div>
    </div>
  )
}

export default Buttons;