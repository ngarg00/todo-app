import React, {Component} from 'react';


class AddTodo extends Component {
    state = {
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">Add new Todo:</label>
                <input id="todo" onChange={this.handleChange} value={this.state.content}></input>
            </form>
        )
    }
}

export default AddTodo