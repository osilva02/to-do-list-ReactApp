import { useState } from "react";

// NewTodoForm component to handle the creation of new todos
export function NewTodoForm({ onSubmit }) {
    
    // State to hold the value of the new todo input
    const [newItem, setNewItem] = useState("");

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevents the default form submission behavior

        if (newItem === "") return; // If the input is empty, do nothing
        
        onSubmit(newItem); // Calls the onSubmit function passed as a prop with the new item

        setNewItem(""); // Resets the input field to empty after submission
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form"> {/* Form to add new todos */}
            <div className="form-row">
                <label htmlFor="item">New Item</label> {/* Label for the input field */}
                <input 
                    value={newItem} // Sets the input value to the newItem state
                    onChange={e => setNewItem(e.target.value)} // Updates newItem state on input change
                    type="text" 
                    id="item" 
                />
            </div>
            <button className="btn">Add</button> {/* Button to submit the form */}
        </form>
    );
}
