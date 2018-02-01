import React from 'react';
import {getAll, getByType, getBetweenAge} from '../data/pets.js'
import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: getAll(),
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }


  handleAdoption = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  handleSelectType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  handleSubmit = () => {

    if (this.state.filters.type === "all") {
      this.setState({
        pets: getAll()
      })
    }
    else {
      this.setState({
        pets: getByType(this.state.filters.type)
      })
    }

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">

              <Filters
                filters={this.state.filters}
                onChangeType={this.handleSelectType}
                onFindPetsClick={this.handleSubmit}

              />

            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
