import React, { Component } from 'react';
import './App.css';
import Groceries from './components/Groceries';
import Basket from './components/Basket';
import ClearButton from './components/ClearButton';

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

  handleCrossingItem = (label) => {
    let itemIndex = this.state.basket.findIndex((basketItem) => basketItem.label === label);
       
    this.setState(prevState => {
      if(prevState.basket[itemIndex].isCrossed){
        return {
          basket: [
            ...prevState.basket.slice(0, itemIndex), 
            {
              ...prevState.basket[itemIndex],
                ...prevState.basket[itemIndex],
                isCrossed: false
            },
            ...prevState.basket.slice(itemIndex + 1)
          ]
        };
      }
      else{
        return {
          basket: [
            ...prevState.basket.slice(0, itemIndex), 
            {
              ...prevState.basket[itemIndex],
                ...prevState.basket[itemIndex],
                isCrossed: true
            },
            ...prevState.basket.slice(itemIndex + 1)
          ]
        };
      }
    });
  }

  clearBasket = () => {
    this.setState( () => {
      return {basket: []};
    });  
  }
 
  render() {
    console.log(...this.state.basket);
    const {basket} = this.state;
    return <div className="main">
      <div>
        <Groceries onAddElement={this.handleAddElement}/>
      </div>
      <div>
        <ClearButton handleButtonClick={this.clearBasket}/>
        <Basket onRemoveElement={this.handleRemoveElement}  onCrossingItem={this.handleCrossingItem} basket={basket}/>
      </div>
    </div>
  }
}
  
export default App;
