import React, { PureComponent } from 'react'
import Person from './Person/Person'



class Persons extends PureComponent{

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
    return true; 
  }
    else { 
      return false; 
    }
  } */

  render() {

return this.props.persons.map((person, index) => {
    return  <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
        isAuth = {this.props.isAuthenticated} />
 } );

}
}

export default Persons;