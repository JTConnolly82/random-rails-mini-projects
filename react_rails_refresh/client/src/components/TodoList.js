import React from 'react';
import Todo from './Todo';



const TodoList = ({ todos, updateTodo, deleteTodo}) => {
  return (
    <div>
      { todos.map((todo) => {
        return <Todo
          key={todo.id}
          {...todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      })}
    </div>
  )
}

export default TodoList;
