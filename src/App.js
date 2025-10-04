import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'

//refactoration of the project with finctional component

export default class App extends Component {

    render() {
        return (
            <div>
                <TodoList></TodoList>
            </div>
        )
    }
}
