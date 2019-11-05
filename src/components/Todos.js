import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }

  delTodo = (id) => {
    console.log(id);
  }

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        delTodo={ this.delTodo } />
    ));
  }
}

export default Todos;