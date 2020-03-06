import React, { Component } from 'react';

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
      <div>
        <h4> Your title is: </h4>
        <h2>{this.state.title}</h2>

	<button onClick={this.fetchTitle}>Generate a new title</button>
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
