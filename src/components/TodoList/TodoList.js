import React, { useState } from 'react'
import Header from './Header'
import Todo from './Todo'

export default function TodoList () {

    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [status, setStatus] = useState('all')

    const removeTodo = (todoID) => {

        const updateTodos = todos.filter(todo=>(
            todo.id !== todoID
        ))

        setTodos(updateTodos) 
    }

    const editTodo = (todoID) => {

        setTodos((prevTodos) => {
            return prevTodos.todos.map(todo =>{
                if(todo.id === todoID){
                    return {...todo , isComplete: !todo.isComplete}
                }
                return todo
            })
        })
    }

    const todoTitleHandler = (event) => {
        setTodoTitle(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault()
        if(todoTitle){
            const newTodo = {
                id: todos.length +1 ,
                title: todoTitle,
                isComplete: false
            }

            setTodos(prevTodos => [...prevTodos.todos , newTodo])
            setTodoTitle('')
        }
    }

    const statusHandler = (event) => {
        setStatus(event.target.value)
        
    }

    return (
        <>
            <Header />
            <form>
                <input type="text" className="todo-input" maxLength="40" value={todoTitle} onChange={this.todoTitleHandler}/>
                <button className="todo-button" type="submit" onClick={this.addTodo}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {status === "completed" && todos.filter(todo=> todo.isComplete).map(todo=>(
                        <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                    ))}
                    {status === "uncompleted" && todos.filter(todo=> !todo.isComplete).map(todo=>(
                        <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                    ))}
                    {status === "all" && todos.map(todo=>(
                        <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                    ))}
                </ul>
            </div>
        </>
    )
}
