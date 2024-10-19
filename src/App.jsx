import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import './App.css';

// Main App component
export default function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState(() => {
    // Get the saved todos from localStorage
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return []; // If no todos found, return an empty array

    return JSON.parse(localValue); // Parse the stored JSON string into an object
  });

  // Effect to update localStorage whenever the todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)); // Save the current todos to localStorage
  }, [todos]); // Only run this effect when the todos state changes

  // Function to add a new todo
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, // Spread the existing todos
        { id: crypto.randomUUID(), title, completed: false }, // Add a new todo object
      ];
    });
  }

  // Function to toggle the completed status of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }; // Update the completed status of the matched todo
        }

        return todo; // Return the todo unchanged if not matched
      });
    });
  }

  // Function to delete a todo by id
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id); // Filter out the todo with the matching id
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} /> {/* Form to add new todos */}

      <h1 className="header">Todo List</h1> {/* Title for the todo list */}

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> {/* Render the todo list */}
    </>
  );
}
