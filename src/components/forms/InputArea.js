import React, { Component } from 'react'

export default class InputTextArea extends Component {

  handleOnChange = (e) => {  
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="uk-margin">
        <div className="uk-form-controls">
        <label className="uk-form-label" htmlFor={this.props.label}>{this.props.label}</label>
          <textarea placeholder={this.props.placeholder} rows='4' type="text" className="uk-input" name={this.props.name} onChange={this.handleOnsChange} id={this.props.id} defaultValue={this.props.value || '' } disabled={this.props.disabled}></textarea>
        </div>
        </div>
    )
  }
}

