import React from 'react';



const Todo = ({ id, complete, name, updateTodo, deleteTodo}) => {
  return (
    <div>
      <div>
        {complete ? <h2>😁</h2> : <h2>😦</h2>}
        <div>
            <h2>
              { name }
            </h2>
        </div>
      </div>
      <button onClick={()=> deleteTodo(id)}>
        Delete
      </button>
    </div>
  )
}


export default Todo;