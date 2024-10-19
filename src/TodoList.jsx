import { TodoItem } from "./Todoitem";

// TodoList component to display the list of todos
export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {/* Display a message if there are no todos */}
            {todos.length === 0 && "No Todos"}

            {/* Map over the todos array and render a TodoItem for each todo */}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        {...todo} // Spread the todo properties into the TodoItem component
                        key={todo.id} // Unique key for each item in the list
                        toggleTodo={toggleTodo} // Pass the toggleTodo function as a prop
                        deleteTodo={deleteTodo} // Pass the deleteTodo function as a prop
                    />
                );
            })}
        </ul>
    );
}
