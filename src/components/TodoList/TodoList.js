import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)

    }

    removeTodo(todoID){

        const updateTodos = [...this.state.todos]        

        const mainTodo = updateTodos.findIndex(todo => (
            todo.id === todoID
        ))

        updateTodos.splice(mainTodo, 1)

        this.setState({
            todos: updateTodos
        }) 
    }

    editTodo(todoID){
        
        this.setState(prevState =>{
            const updateTodos = prevState.todos.map(todo =>{
                if(todo.id === todoID){
                    return {...todo , isComplete: !todo.isComplete}
                }
                return todo
            })
            return {todos: updateTodos}
        })
    }

    todoTitleHandler(event){
        this.setState(
            {todoTitle: event.target.value}
        )
    }

    addTodo(event){
        event.preventDefault()
        if(this.state.todoTitle){
            const newTodo = {
                id: this.state.todos.length +1 ,
                title: this.state.todoTitle,
                isComplete: false
            }

            this.setState(prevState => ({
                todos: [...prevState.todos , newTodo],
                todoTitle: ''
            }))
        }
    }

    statusHandler(event){
        this.setState({
            status: event.target.value
        })
        
    }

    render() {
        return (
            <>
                <Header />
                <form>
                    <input type="text" className="todo-input" maxLength="40" value={this.state.todoTitle} onChange={this.todoTitleHandler}/>
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
                        {this.state.status === "completed" && this.state.todos.filter(todo=> todo.isComplete).map(todo=>(
                            <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                        ))}

                        {this.state.status === "uncompleted" && this.state.todos.filter(todo=> !todo.isComplete).map(todo=>(
                            <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                        ))}

                        {this.state.status === "all" && this.state.todos.map(todo=>(
                            <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
