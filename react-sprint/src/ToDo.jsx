import React, { useState } from "react";

export default function ToDo() {

    const [tasks, setTasks] = useState([
        { text: "Write the code", completed: false },
        { text: "Hit the gym", completed: false }
    ]);
    const [newTask, setNewTask] = useState("");

    function addNewTask() {
        if (newTask.trim() === "") return;

        setTasks(t => [...t, {text : newTask, completed : false}]);
        setNewTask("");
    }

    function toggleTask(indexToToggle) {
        setTasks(t =>
            t.map((task, index) =>
                index === indexToToggle
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    } 

    function deleteTask(indexToDelete) {
        setTasks(t => t.filter((_, index) => index !== indexToDelete));
    }

    return (
        <>
            <h2>To-do list app</h2>
            <h2>Tasks:</h2>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
                        <span
                            onClick={() => toggleTask(index)}
                            style={{
                                cursor: "pointer",
                                textDecoration: task.completed ? "line-through" : "none",
                                color: task.completed ? "gray" : "black"
                            }}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="enter the new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <br />
            <button type="submit" onClick={addNewTask}>Add Task</button>
        </>
    );
}
