import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import './Intro.css';

class Intro extends Component {

  state = {
      fade: false
  };

  componentWillMount() {
      setTimeout(() => this.setState({fade : true}), 7000);
  }

  render() {
    return (
      <div id="custom-overlay" className={this.state.fade ? 'fade' : ''}>
        <div id="perspective">
          <div id="perspective-content">
            <img src={logo} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;