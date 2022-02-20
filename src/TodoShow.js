import React, { useState } from "react";

export const TodoShow = ({
  todo,
  updateTodosInDatabase,
  deleteTodoInDatabase,
}) => {
  const [todoToggle, setTodoToggle] = useState(true);
  const [newTitle, setNewTitle] = useState(todo.title);

  const updateTodo = (id) => {
    setTodoToggle(!todoToggle);
    if (newTitle === "") {
      console.log("Empty todo update");
      return;
    }
    updateTodosInDatabase(id, newTitle);
  };

  const deleteTodo = (id) => {
    deleteTodoInDatabase(id);
  };

  return (
    <div key={todo.id}>
      {todoToggle ? (
        <h5>
          {todo.title}
          <button onClick={() => setTodoToggle(!todoToggle)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </h5>
      ) : (
        <div>
          <input
            placeholder={newTitle}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => updateTodo(todo.id)}>Update</button>
        </div>
      )}
    </div>
  );
};
