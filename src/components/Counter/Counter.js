import React from "react";

class Counter extends React.Component {
  static defaultProps = {
    initualValue: 0,
  };

  state = {
    value: this.props.initualValue,
  };

  handleIncrement = (e) => {
    const { target } = e;
    console.log("ggggggggg");
    console.log(target);
    // const { value } = this.state;
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  handleDecrement = (e) => {
    console.log("hhhhhhhhh");
    console.log(e.type);
    // e.type !== "click"
    //   ? console.log("yyyyyyyyyyyyy")
    //   : console.log("jjjjjjjjjj");
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Уменьшить
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Увеличить
        </button>
      </div>
    );
  }
}

// const Counter = () => {
//   return (
//     <div>
//       <span>0</span>
//       <button type="button">Уменьшить</button>
//       <button type="button">Увеличить</button>
//     </div>
//   );
// };

export default Counter;
