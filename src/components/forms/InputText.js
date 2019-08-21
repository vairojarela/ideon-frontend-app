import React, { Component } from 'react'

export default class InputText extends Component { 


  handleOnChange = (e) => {  
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    
    return (
      <div className="uk-margin">
        <div className="uk-form-controls">
        <label className="uk-form-label" htmlFor={this.props.label}>{this.props.label}</label>
          <input placeholder={this.props.placeholder} type="text" className="uk-input" name={this.props.name} id={this.props.id}  defaultValue={this.props.value || ''} disabled={this.props.disabled}></input>
        </div>
        </div>
    )
  }
}

