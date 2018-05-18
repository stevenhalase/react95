import React, { Component } from 'react';
import Dom from '../../utilities/Dom';
import './Button.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/images/icons/16', false, /\.(png|jpe?g|svg)$/));

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  render() {
    return (
      <div className="Button" 
        style={this.props.size ? { height: this.props.size+'px', width: this.props.size+'px' } : {}} 
        onMouseDown={this.handleMouseDown}
        tabIndex={typeof this.props.tabindex !== 'undefined' ? this.props.tabindex : '0'}>
        {(
          this.props.image ? 
          <img className="Button-image" 
            style={this.props.imagesize ? 
                    this.props.text ? 
                      { height: this.props.imagesize+'px', width: this.props.imagesize+'px' } : 
                      { height: this.props.imagesize+'px', width: this.props.imagesize+'px', margin: '0' } :
                    this.props.text ? 
                      { } : 
                      { margin: '0' }} src={images[this.props.image+'.png']} /> : ''
        )}
        <span className={this.props.bold ? 'Button-text--bold' : 'Button-text'}>{this.props.text}</span>
        <div className="Button-dot-border" style={this.props.windowbutton ? { display: 'none' } : {}}></div>
      </div>
    );
  }
  handleMouseDown(e) {
    if (this.props.onclickevent && typeof this.props.onclickevent) {
      this.props.onclickevent();
    }
  }
}

export default Button;
