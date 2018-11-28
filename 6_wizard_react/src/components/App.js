import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import Buttons from './Buttons';
import Page from './Page';


class App extends Component {
  state = {
    steps: ['Make', 'Model', 'Transmission', 'Fuel type', 'Finish'],
    step: 0,
    make: '',
    model: '',
    transmission: '',
    fuelType: '',
    cars: [],
  }

  prev = () => {
    if (this.state.step === 1) {
      this.setState({ model: '' });
    }

    this.setState({ step: this.state.step - 1 });
  }

  next = () => {
    this.setState({ step: this.state.step + 1 });
  }

  reset = () => {
    this.setState({
      cars: [...this.state.cars, {
        make: this.state.make,
        model: this.state.model,
        transmission: this.state.transmission,
        fuelType: this.state.fuelType,
      }],
      step: 0,
      make: '',
      model: '',
      transmission: '',
      fuelType: '',
    });
  }

  changeMake = (e) => {
    this.setState({ make: e.target.innerText });
  }

  changeModel = (e) => {
    this.setState({ model: e.target.innerText });
  }

  changeTransmission = (e) => {
    this.setState({ transmission: e.target.innerText });
  }

  changeFuelType = (e) => {
    this.setState({ fuelType: e.target.innerText });
  }

  render() {
    const { step, steps, cars } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="container">
          {steps.map((item, index) => step === steps.indexOf(item) && <Page
            key={index}
            item={item}
            state={this.state}
            onChangeMake={this.changeMake}
            onChangeModel={this.changeModel}
            onChangeTransmission={this.changeTransmission}
            onChangeFuelType={this.changeFuelType}
          />
          )}
          <Buttons
            state={this.state}
            onPrev={this.prev}
            onNext={this.next}
            onReset={this.reset}
          />
        </div>
        {!!cars.length && <Table state={this.state} />}
      </div>
    );
  }
}

export default App;