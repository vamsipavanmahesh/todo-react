import React, { Component } from 'react';
import './App.css';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return(
      <div>
        {this.props.todo}
        <span onClick={() => this.props.onRemove(this.props.todo)}> remove </span>
      </div>
    )
  }
}


class InputComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "enter your input"
    }
  }

  render(){
    return(
      <div>
        <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
        <input type="submit" onClick={() => this.props.onSubmit(this.state.value)} />
      </div>
    )
  }

         
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: ["wash", "cook", "salon"]
    }
  }

  render() {
    return (
      <div className="App">
        <InputComponent onSubmit={(newItem) => this.setState({todos: this.state.todos.concat(newItem)})}/>
        { this.state.todos.map(todo => <Todo todo={todo} onRemove={(value) => this.setState({todos: this.state.todos.filter((item) => item !== value)})} />) }
      </div>
    );
  }
}

export default App;
