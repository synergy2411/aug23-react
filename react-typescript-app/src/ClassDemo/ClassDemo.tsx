import React from "react";

interface IProps {
  initialValue: number;
}

interface IState {
  counter: number;
}

class ClassDemo extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: this.props.initialValue,
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <button
          className="btn btn-dark"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {" "}
          {this.state.counter}
        </button>
      </div>
    );
  }
}

export default ClassDemo;
