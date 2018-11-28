import React, { Component } from 'react';
import Buttons from './Buttons';
import Table from './Table';


class App extends Component {
  state = {
    step: 1,
    brand: '-',
    model: '-',
    fuelType: '-',
    transmissionType: '-',
    addedCars: [],
  }

  addCar = () => {
    this.setState({
      addedCars: [...this.state.addedCars, {
        brand: this.state.brand,
        model: this.state.model,
        transmissionType: this.state.transmissionType,
        fuelType: this.state.fuelType,
      }]
    });
    this.resetState();
  }

  resetState = () => {
    this.setState({
      step: 1,
      brand: '-',
      model: '-',
      transmissionType: '-',
      fuelType: '-',
    });
  }

  prevStepHandler = () => {
    this.setState({ step: this.state.step - 1 });
  }

  nextStepHandler = () => {
    this.setState({ step: this.state.step + 1 });
  }

  carBrandChangeHandler = (value) => {
    this.setState({ carBrand: value });
  }

  handlerFormChange = (e) => {
    console.log([e.target.name], e.target.value);
  }

  handleBrandClick = (e) => {
    this.setState({ brand: e.target.name });
  }

  handleModelClick = (e) => {
    this.setState({ model: e.target.name });
  }

  handleFuelClick = (e) => {
    this.setState({ fuelType: e.target.name });
  }

  handleTransmissionTypeClick = (e) => {
    this.setState({ transmissionType: e.target.name });
  }

  render() {
    const { step, brand, addedCars } = this.state;

    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-baseline">
          <h1>Wizard.</h1>
          <h1>{step}</h1>
        </div>

        {step === 1 && <div className="mt-5 mb-5">
          <h4 className="mb-4">Выберите марку автомобиля</h4>
          <div className="list-group">
            <button onClick={this.handleBrandClick} name="Audi" className={this.state.brand === 'Audi' ? 'list-group-item' : 'list-group-item active'}>Audi</button>
            <button onClick={this.handleBrandClick} name="Opel" className={this.state.brand === 'Opel' ? 'list-group-item' : 'list-group-item active'}>Opel</button>
            <button onClick={this.handleBrandClick} name="Ford" className={this.state.brand === 'Ford' ? 'list-group-item' : 'list-group-item active'}>Ford</button>
          </div>
        </div>}

        {step === 2 && <div className="mt-5 mb-5">
          <h4 className="mb-4">Выберите модель автомобиля</h4>

          {brand === 'Audi' && <div className="list-group">
            <button onClick={this.handleModelClick} name="A1" className={this.state.model === 'A1' ? 'btn btn-primary' : 'btn'}>A1</button>
            <button onClick={this.handleModelClick} name="A2" className={this.state.model === 'A2' ? 'btn btn-primary' : 'btn'}>A2</button>
            <button onClick={this.handleModelClick} name="A3" className={this.state.model === 'A3' ? 'btn btn-primary' : 'btn'}>A3</button>
          </div>}

          {brand === 'Opel' && <div className="list-group">
            <button onClick={this.handleModelClick} name="Corsa" className={this.state.model === 'Corsa' ? 'btn btn-primary' : 'btn'}>Corsa</button>
            <button onClick={this.handleModelClick} name="Astra" className={this.state.model === 'Astra' ? 'btn btn-primary' : 'btn'}>Astra</button>
            <button onClick={this.handleModelClick} name="Omega" className={this.state.model === 'Omega' ? 'btn btn-primary' : 'btn'}>Omega</button>
          </div>}

          {brand === 'Ford' && <div className="list-group">
            <button onClick={this.handleModelClick} name="Focus" className={this.state.model === 'Focus' ? 'btn btn-primary' : 'btn'}>Focus</button>
            <button onClick={this.handleModelClick} name="Fiesta" className={this.state.model === 'Fiesta' ? 'btn btn-primary' : 'btn'}>Fiesta</button>
            <button onClick={this.handleModelClick} name="Kuga" className={this.state.model === 'Kuga' ? 'btn btn-primary' : 'btn'}>Kuga</button>
          </div>}

        </div>}

        {step === 3 && <div className="mt-5 mb-5">
          <h4 className="mb-4">Выберите тип топлива</h4>

          <div className="list-group">
            <button onClick={this.handleFuelClick} name="B" className={this.state.fuelType === 'B' ? 'btn btn-primary' : 'btn'}>Бензин</button>
            <button onClick={this.handleFuelClick} name="D" className={this.state.fuelType === 'D' ? 'btn btn-primary' : 'btn'}>Дизель</button>
            <button onClick={this.handleFuelClick} name="G" className={this.state.fuelType === 'G' ? 'btn btn-primary' : 'btn'}>Газ</button>
          </div>

        </div>}

        {step === 4 && <div className="mt-5 mb-5">
          <h4 className="mb-4">Выберите тип трансмиссии</h4>

          <div className="list-group">
            <button onClick={this.handleTransmissionTypeClick} name="A" className={this.state.transmissionType === 'A' ? 'btn btn-primary' : 'btn'}>Автоматическая</button>
            <button onClick={this.handleTransmissionTypeClick} name="M" className={this.state.transmissionType === 'M' ? 'btn btn-primary' : 'btn'}>Механическая</button>
          </div>

        </div>}

        {/* <form onChange={this.handlerFormChange}>
          {step === 0 && <Page0 step={step} />}
          {step === 1 && <Page1 step={step} />}
          {step === 2 && <Page2 step={step} />}
          {step === 3 && <Page3 step={step} />}
        </form> */}
        <Buttons step={step} onPrevClick={this.prevStepHandler} onNextClick={this.nextStepHandler} onAddCar={this.addCar} />
        {!!addedCars.length && <Table cars={addedCars} />}
      </div>
    );
  }
}

export default App;
