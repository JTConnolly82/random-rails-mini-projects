import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    // call to rails server to get items
    axios.get("/api/items")
    .then( res => {
      this.setState({ todos: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  addItem = (name) => {
    axios.post('/api/items', { name })
    .then( res => {
      const { todos } = this.state;
      this.setState({ todos: [...todos, res.data]});
    })
  }

  updateTodo = (id) => {
    axios.put(`/api/items/${id}`)
    .then( res => {
      const todos = this.state.todos.map( t => {
        if (t.id === id) {
          return res.data;
        } else {
          return t
        }
      })
      this.setState({ todos })
    })
  }

  deleteTodo = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => {
        const { todos } = this.state;
        this.setState({
          todos: todos.filter((t) => {
            return t.id !== id
          })
        })
      })
  }
  
  
  render() {
    return (
      <div className="App">
        <TodoForm addItem={this.addItem} />
        <br />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
