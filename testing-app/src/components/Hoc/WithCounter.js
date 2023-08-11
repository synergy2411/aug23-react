import React from "react";

function WithCounter(Component) {
  function nestedFn(value) {
    class EnhancedComponent extends React.Component {
      constructor() {
        super();
        this.state = {
          counter: value,
        };
      }

      increaseCounter = () =>
        this.setState({ counter: this.state.counter + 1 });

      render() {
        return (
          <Component
            counter={this.state.counter}
            increaseCounter={this.increaseCounter}
          />
        );
      }
    }

    return EnhancedComponent;
  }

  return nestedFn;
}

export default WithCounter;
