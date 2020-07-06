import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

const Todos = ({ todos, deleteTodo, handleEdit }) => {
    const [open, setOpen] = React.useState(false);
    const [editTodoText, setTodo] = React.useState('');

    const handleChange = (e)=>{
        setTodo(e.target.value)
    }
    const handleToggle = () => {
        setOpen(!open);
    }
    const handleSubmit = (id)=>{
        handleEdit(id,editTodoText);
    }

    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item item center" key={todo.id}>
                    <span>{todo.content}</span>
                    <Tooltip title="Delete">      
                         <button className="btn-floating blue right btn-small" onClick={() => { deleteTodo(todo.id) }}>
                        <i className="material-icons">delete</i>
                    </button>
                    </Tooltip>
                    <Tooltip title="Edit">
                    <button className="btn-floating blue right btn-small" href="#modal1" onClick={handleToggle}><i className="material-icons">edit</i></button>
                    </Tooltip>
                    <Dialog
                        open={open}
                        onClose={handleToggle}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Edit Todo</DialogTitle>
                        <DialogContent>
                        <div className="input-field">
                        <input  defaultValue={todo.content}  onChange={handleChange} id="editTodo" type="text" className="validate"></input>
                        </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=>{handleToggle();handleSubmit(todo.id)}} className="blue white-text" type="submit">
                                Save</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        })) : (
            <p className="center">You have no todos left, Yay!</p>
        )
    return (
        <div className="todos collection">
            {TodoList}
        </div>
    )
}


export default Todos;