import React from "react";

class ClassBased extends React.Component {
  state = {
    counter: 0,
    todos: [],
  };

  constructor(props) {
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((r) => r.json())
      .then((todos) => this.setState({ todos }))
      .catch(console.error);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // console.log(nextProps, nextState);
    return nextProps.toggle !== this.props.toggle;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increaseCounter() {
    // this.state.counter++;           // NEVER EVER CHANGE STATE MUTABLY
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button className="btn btn-primary" onClick={this.increaseCounter}>
          +1
        </button>

        <button className="btn btn-danger" onClick={this.decreaseCounter}>
          -1
        </button>
        <hr />

        {this.props.toggle && <h2>Toggle is true</h2>}
        {!this.props.toggle && <h2>Toggle is false</h2>}

        <hr />
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBased;
