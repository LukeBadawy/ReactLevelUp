import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './person';
import { Button } from 'reactstrap';

class TestBed extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value : 1
      }
      //without this the addByOne method did not have access to the
      //setState Method as the this keyword was still bound to the
      //_addByOne method and not the Testbed class (which has the state)
      this._addByone = this._addByone.bind(this); 
    }

    //if i did not define name in the component inline on the app page
    //the name prop would become jack by default
    static defaultProps = {
        name: 'Jack'
    }

    //once the components mounts (loads in successfully) the state is changed 
    componentDidMount() {
      this.setState({
        value: this.state.value + 9
      });
    }

    _addByone() {
      this.setState({
        value: this.state.value + 1
      });
    }

    render() {
      
      let greeting = "World";

      if(this.props.isPerson) {
        console.log('isPerson');
        greeting = <Person name={this.props.name} />;
      } else {
        console.log('isnt person');
      }

      return (
        <div>
          <h1>This name is a prop <sup>{greeting}</sup></h1>
          <span>This value is from state <span>{this.state.value}</span></span>
          <p className="mt-4">
            {/* 
              Never use brackets on the end of a function in the render method
              as it will fire the function twice
            */}
            <Button color="primary" onClick={this._addByone}>Click Me</Button>
          </p>
        </div>
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
        isPerson: PropTypes.bool
    }
  }
  
  export default TestBed;