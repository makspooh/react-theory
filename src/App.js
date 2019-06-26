import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  constructor(props) {
    console.log('App constructor');
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
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

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App render');

    const divStyle = {
      textAlign: 'center'
    };

    const buttonStyle = {
      border: '2px solid lightgrey',
      background: 'none',
      width: '120px',
      height: '35px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      cursor: 'pointer',
      ':hover': {
        background: 'gold'
      }
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
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <button
          style={buttonStyle}
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

export default Radium(App);