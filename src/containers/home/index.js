import React, { Component } from 'react'
import ShoppingList from '../../components/shopping-list';

class Home extends Component {

  state = {starships : []}
  componentDidMount() {
    fetch('https://swapi.co/api/starships')
    .then(response => response.json())
    .then(jsonResponse => this.setState({starships: jsonResponse.results}));
  }

  render(){
    return (
      <div>
        <h1>Home</h1>
        <ShoppingList items={this.state.starships}/>
      </div>
    )
  }
}


export default Home;
