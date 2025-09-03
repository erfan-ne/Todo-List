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
        // this.statusHandler = this.statusHandler.bind(this)

    }

    removeTodo(todoID){

        const newTodos = [...this.state.todos]        

        const mainTodo = newTodos.findIndex(todo => (
            todo.id === todoID
        ))

        newTodos.splice(mainTodo, 1)

        this.setState({
            todos: newTodos
        })
        
        
    }

    editTodo(todoID){
        
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
                title: this.state.todoTitle
            }

            this.setState(prevState => ({
                todos: [...prevState.todos , newTodo],
                todoTitle: ''
            }))
        }
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
                        <select name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.todos.map(todo => (
                            <Todo {...todo} key={todo.id} onTrashHandler={this.removeTodo} onCheckHandler={this.editTodo}/>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
