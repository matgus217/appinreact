import React from "react"

function Todo(props) {
    const styles = {textDecoration: props.isCompleted ? "line-through" : ""}
    return (
        <div className="todo">
            <div className="modify-todo">
                <div className="completed" 
                    onClick={props.toggleCompleted}
                >
                    <span className="tooltiptext">Mark As Done</span>
                    {props.isCompleted && "⚫"}
                </div>
                <div 
                    className="delete-todo"
                    onClick={props.deleteTodo}
                >
                    x
                    <span className="tooltiptext">Delete</span>
                </div>
            </div>
            <div
                className="todo-text"
                // onInput={props.handleTodoUpdate} 
                // contentEditable={true}
                style={styles}
            >
                {props.body}
            </div>
            
        </div>
    )
}

export default Todo