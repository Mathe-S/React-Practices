import React, { Component } from 'react';
import classes from './Person.css'
import AuthContext from '../../context/auth-context';


class Person extends Component {

  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
  }
    
  render () {
        
    
return (
 <div className= {classes.Person} >
   <div>
   <AuthContext.Consumer>
     { context =>
     context.authenticated ? <p>Authenticated </p> : <p>please log in</p>} 
    </AuthContext.Consumer>
    </div>
    <p onClick= {this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
    <p>{this.props.children}</p>
    <input type = "text" onChange = {this.props.changed} value = {this.props.name} />
</div>
)
}
}
export default Person;