import React from 'react';

class Todo extends React.Component {
		render() {
                return (<li key={this.props.todo.id}>{this.props.todo.task} { this.props.todo.completed ?<span> - completed</span> : <span></span> }</li>)
}
}

export default Todo;

