import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }
  
  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars})
  }

  deleteHandler(i) {
    const cars = [...this.state.cars];
    cars.splice(i, 1);

    this.setState({cars})
  }

  toggleCarsHendler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    };

    let cars = null;

    if (this.state.showCars) {
      cars =
        this.state.cars.map((car, i) => {
          return (
            <Car
              key={i}
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, i)}
              onChangeName={event => this.onChangeName(event.target.value, i)}
            />
          )
        })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHendler}
        >Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
    )
  }
}

export default App;