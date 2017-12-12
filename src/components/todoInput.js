import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {value: "test"};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        console.log("change is a happening");
    }

    addTodo(todo){
        console.log("todo", todo);
    }

    render() {
        return(
            <div>
                <input type="text" value="" onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={()=> this.addTodo(this.state.value)}>Submit</button>
            </div>
        );
    }
}