import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Chris',
      lastName: 'Oakman',
      fruit: 'bananas'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value,
    })
  }

  handleSubmit(event){
    alert('A fruit was submitted: ' + this.state.fruit)
    event.preventDefault()
  }

  update_fruit(event, key) {
    this.setState({[key]:event.target.value})
  }

  render() {
    return (
      <div>
        <h1>My Form Component</h1>
        <input type='text' onChange={event => this.handleChange(event, 'firstName')}/>First Name
        <input type='text' onChange={event => this.handleChange(event, 'lastName')}/>Last Name
        <select value={this.state.fruit}
          onChange={event => this.update_fruit(event, 'fruit')}>
          <option value="grapes">Grapes</option>
          <option value="watermelon">Watermelon</option>
          <option value="canteloupe">Canteloupe</option>
        </select>
        <h1>{this.state.firstName} {this.state.lastName} loves {this.state.fruit} !</h1>
      </div>
    ) 
  }
  
}

export default Form

// First Name input
// Last Name input
// Select with fruit options 
// {firstName} {lastName} loves {fruit}
// displayed 500 times