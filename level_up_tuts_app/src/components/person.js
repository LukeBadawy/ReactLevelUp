import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {

    //if i did not define name in the component inline on the app page
    //the name prop would become jack by default
    static defaultProps = {
        name: 'Jack'
    }

    render() {
      return (
          <span className="text-primary">{this.props.name}</span>
      );
    }
    //PropTypes.string
    //To get this error to fire for prop type checks just pass the name prop somehthing that is not 
    //a string IE a boolean like name={true} and react with throw and error in the console

    //PropTypes.isRequired
    //currently this error will not fire, however if i remove both the defaultProps at the top
    //of testBed and dont pass anything into props.name on the app page it will throw the error

    static propTypes = {
        name: PropTypes.string.isRequired,
    }
  }
  
  export default Person;