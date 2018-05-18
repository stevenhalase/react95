import React, { Component } from 'react';
import './StoryIcon.css';

class StoryIcon extends Component {
  render() {
    return (
      <div className="StoryIcon">
        <img src={this.props.icon}/>
        <p className="StoryIcon-text">{this.props.text}</p>
      </div>
    );
  }
}

export default StoryIcon;