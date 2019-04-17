import React, { Component } from 'react';
import './App.css';
import Groceries from './components/Groceries';
import Basket from './components/Basket';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      basket:[]
    }
  }

  handleRemoveElement = (label) => {
    let itemIndex = this.state.basket.findIndex((basketItem) => basketItem.label === label);
     
    this.setState(prevState => {
      if(prevState.basket[itemIndex].count !== 1){
        return {
          basket: [
            ...prevState.basket.slice(0, itemIndex), 
            {
              ...prevState.basket[itemIndex],
              count: prevState.basket[itemIndex].count - 1
            },
            ...prevState.basket.slice(itemIndex + 1)
          ]
        };
      }
      else {
        return {
          basket: [
            ...prevState.basket.slice(0, itemIndex), 
            ...prevState.basket.slice(itemIndex + 1)
          ]
        };
      }
    });
  }

  handleAddElement = (label) => {
    let itemIndex = this.state.basket.findIndex((basketItem) => basketItem.label === label);
      
    if(itemIndex !== -1)
    {
      this.setState(prevState => {
        return {
          basket: [
            ...prevState.basket.slice(0, itemIndex), 
            {
              ...prevState.basket[itemIndex],
              count: prevState.basket[itemIndex].count + 1
            },
            ...prevState.basket.slice(itemIndex + 1)
          ]
        };
      });
    }
    else {
      let newObject = {label: label, inBasket: true, count: 1};
        this.setState(prevState => ({
          basket: [...prevState.basket, newObject]
      }))
    } 
  }

  render() {
    console.log(...this.state.basket);
    const {basket} = this.state;
    return <><Groceries onAddElement={this.handleAddElement}/><Basket onRemoveElement={this.handleRemoveElement} basket={basket}/></>
  }
}
  
export default App;
