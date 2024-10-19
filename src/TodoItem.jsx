export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                {/* Checkbox for marking the todo as completed */}
                <input 
                    type="checkbox" 
                    checked={completed} // Sets the checkbox state based on the completed prop
                    onChange={e => toggleTodo(id, e.target.checked)} // Calls toggleTodo with the todo id and checkbox state
                />
                {title} {/* Display the title of the todo */}
            </label>

            {/* Button to delete the todo */}
            <button 
                onClick={() => deleteTodo(id)} // Calls deleteTodo with the todo id when clicked
                className="bton-delete" // Button styling
            >
                Delete
            </button>
        </li>
    );
}
