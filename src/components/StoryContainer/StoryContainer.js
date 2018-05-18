import React, { Component } from 'react';
import './StoryContainer.css';

class StoryContainer extends Component {
  render() {
    return (
      <div className="StoryContainer">
        {this.props.children}
      </div>
    );
  }
}

export default StoryContainer;