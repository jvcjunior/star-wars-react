import React, { Component } from 'react';
import { connect } from 'react-redux'

import logo from '../../assets/img/logo.svg'
import './Intro.css';

import { hideIntro } from '../../modules/intro'

class Intro extends Component {

  componentDidMount() {
      setTimeout(this.props.hide, 7000);
      var audio = new Audio('../../assets/audio/intro.mp3');
      audio.crossorigin = 'anonymous';
      audio.setAttribute('crossorigin', 'anonymous');
      audio.load();
      audio.play();
  }

  render() {
    return (
      <div id="custom-overlay" className={this.props.intro.showIntro ? '' : 'fade'}>
        <div id="perspective">
          <div id="perspective-content">
            {/*<img src={logo} alt=""/>*/}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    intro: state.intro
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hide: () => {
      dispatch(hideIntro())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)