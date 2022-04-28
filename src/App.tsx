import React from 'react';
import './App.css';
import TodoList from "./TodoList";

 export type TaskType = {
    id: number,
    title: string,
   isDone: boolean
};

function App() {
    const todoList_1 = "What ti lern"
    const todoList_2 = "What ti buy"
    const todoList_3 = "What ti read"

    const tasks: Array<TaskType> = [
        {id: 1,title: "HTML&CSS", isDone: true},
        {id: 2,title: "JS/TS", isDone: true},
        {id: 3,title: "React", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList
                title = {todoList_1}
            tasks = {tasks}/>
            {/*<TodoList title= {todoList_2}/>*/}
            {/*<TodoList title = {todoList_3}/>*/}
        </div>
    );
}

export default App;
