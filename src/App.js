import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(){
    super();
    this.state={
      txt:'this is the state text'
    }
  }

  update(e) {
    this.setState(
      {txt:e.target.value})
  }
  render() {
    /* (props) let txt = this.props.txt;
    return <h1>{txt}</h1>*/
      let txt = this.state.txt;
    return (
      <div>
      <h1>{txt}</h1>
      <Widget update={this.update.bind(this)}/>
      <Widget update={this.update.bind(this)}/>
      <Widget update={this.update.bind(this)}/>
      <Widget update={this.update.bind(this)}/>
      </div>)
  }
}

const Widget = (props) => 
{
  return <input type = 'text' onFocusLost={props.update}/>
}


App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "Default text"
}

export default App;