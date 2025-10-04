import React, { Component } from 'react'

export default function Todo () {

    const checkBtnHandler = () => {
        props.onCheckHandler(props.id)
    }

    const trashBtnHandler = () => {
        props.onTrashHandler(props.id)
    }

    return (
        // 'completed' class for completed todos
        <div className='todo' style={{ display: 'flex' }}>
            <li className={`todo-item ${props.isComplete ? "completed" : ""}`}>
                {props.title}
            </li>
            <button className="check-btn" onClick={checkBtnHandler(this)}>
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>
            <button className="trash-btn" onClick={trashBtnHandler(this)}>
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}