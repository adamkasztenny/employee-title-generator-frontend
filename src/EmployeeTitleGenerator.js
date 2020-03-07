import React, { Component } from 'react';
import './EmployeeTitleGenerator.css';

const API_URL = '/employee-title';

class EmployeeTitleGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    };

    this.fetchTitle = this.fetchTitle.bind(this);
  }

  render() {
    return (
      <div className="container center-contents">
        <h2> Your title is: {this.state.title}</h2>

	<button type="button" className="btn btn-primary" onClick={this.fetchTitle}>Generate a new title</button>
      </div>
    );
  }
  
  componentDidMount() {
    this.fetchTitle() 
  }
  
  fetchTitle() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({ title: data.title }));
  }
}

export default EmployeeTitleGenerator;
