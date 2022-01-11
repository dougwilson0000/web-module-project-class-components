import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    render() {
        return (<form>
            <input onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Add</button>
        </form>)
    }
}

export default TodoForm;