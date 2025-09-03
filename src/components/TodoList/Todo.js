import React, { Component } from 'react'

export default class Todo extends Component {

    checkBtnHandler(){
        this.props.onCheckHandler(this.props.id)
    }

    trashBtnHandler(){
        this.props.onTrashHandler(this.props.id)
    }

    render() {
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn" onClick={this.checkBtnHandler.bind(this)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.trashBtnHandler.bind(this)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}