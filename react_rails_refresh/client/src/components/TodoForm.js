import React from 'react';



class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder='add a todo' 
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }


}

export default TodoForm;
