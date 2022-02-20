import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { TodoShow } from "../TodoShow";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const todoCollectionRef = collection(db, "Todos");

  //Create - Create new Todo
  const createTodo = async () => {
    await addDoc(todoCollectionRef, { title: title, complete: false });
  };

  //Read - Import Data from database
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(todoCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  //Update - Update your todos
  const updateTodos = async (id, newTitle) => {
    const todoRef = doc(db, "Todos", id);
    const updateTodo = { title: newTitle };
    await updateDoc(todoRef, updateTodo);
  };

  //Delete
  const deleteTodo = async (id) => {
    const todoRef = doc(db, "Todos", id);
    await deleteDoc(todoRef);
  };

  return (
    <div className="App">
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <button onClick={createTodo}>Add</button>
      <div>
        <h2>Your Todos:</h2>
        {todos.map((todo) => (
          <TodoShow
            key={todo.id}
            todo={todo}
            updateTodosInDatabase={updateTodos}
            deleteTodoInDatabase={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
