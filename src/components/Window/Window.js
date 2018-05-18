import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Window.css';
import Button from '../Button/Button';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/images/icons/16', false, /\.(png|jpe?g|svg)$/));

class Window extends Component {
  constructor(props) {
    super(props);
    this.confirmButton = React.createRef();
  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this.confirmButton.current));
    ReactDOM.findDOMNode(this.confirmButton.current).focus();
  }
  render() {
    return (
      <div className="Window">
        <div className="Window-header">
          <div className="Window-header-information">
            {(
              this.props.icon ? 
              <img className="Window-header-icon" src={images[this.props.icon+'.png']} /> : ''
            )}
            {(
              this.props.title ?
              <span className="Window-header-title">{this.props.title}</span> : ''
            )}
          </div>
          <div className="Window-header-buttons">
            <div className="Window-header-buttons-close">
              <Button image="window-close" size={12} imagesize={8} windowbutton={true} />
            </div>
          </div>
        </div>
        <div className="Window-content">
          {(
            this.props.title ?
            <span className="Window-content-title">{this.props.title}</span> : ''
          )}
          {this.props.children}
        </div>
        <div className="Window-footer">
            <div className="Window-footer-buttons">
              <div className="Window-footer-button-container"><Button text="OK" ref={this.confirmButton} /></div>
              <div className="Window-footer-button-container"><Button text="Cancel" /></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Window;