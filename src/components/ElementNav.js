import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class ElementNav extends Component {

  render() {  
    console.log(this.props)
    return (
      <nav>
        <button className="uk-button uk-button-small uk-button-primary" onClick={this.props.goBack}>Back</button>
      </nav>
    )
  }
}

export default withAuth(ElementNav);