import React, { Component } from 'react';
import { connect } from 'react-redux'

import logo from '../../assets/img/logo.svg'
import './Intro.css';

import { hideIntro } from '../../modules/intro'
import introMp3 from '../../assets/audio/intro.mp3';

class Intro extends Component {

  componentDidMount() {
      setTimeout(this.props.hide, 7000);
      //https://stackoverflow.com/questions/44121471/html5-audio-is-not-playing-in-my-react-app-in-localhost
  }

  render() {
    return (
      <div id="custom-overlay" className={this.props.intro.showIntro ? '' : 'fade'}>
        <div id="perspective">
          <div id="perspective-content">
            <img src={logo} alt=""/>
          </div>
        </div>
        <audio src={introMp3} controls autoPlay style={{display: 'none'}}/>
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