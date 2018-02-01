import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {this.props.pets.map((p) => {
          return <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(p.id)} />
        })
      }

      </div>
    );
  }
}

export default PetBrowser;
