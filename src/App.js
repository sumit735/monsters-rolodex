import React, { Component } from 'react';
import {CardList} from './components/cardlist/card-list.component';
import { SearchBox } from './components/searchbox/search-box.component';


import './App.css';

// functional component
// function App() {
  
// }

// class component
class App extends Component {

  // getting state
  constructor() {
    super();

    this.state= {
      monsters: [],
      searchfield: ''
    }

  

  }

  // React lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {

    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchfield.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monster" handleChange= {e => {
            this.setState({searchfield: e.target.value});
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
