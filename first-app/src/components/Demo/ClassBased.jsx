import React from "react";

class ClassBased extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
  }

  increaseCounter() {
    // this.state.counter++;           // NEVER EVER CHANGE MUTABLY
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
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button
          className="btn btn-primary"
          onClick={this.increaseCounter.bind(this)}
        >
          +1
        </button>

        <button className="btn btn-danger" onClick={this.decreaseCounter}>
          -1
        </button>
        <hr />

        {this.props.toggle && <h2>Toggle is true</h2>}
        {!this.props.toggle && <h2>Toggle is false</h2>}
      </div>
    );
  }
}

export default ClassBased;
