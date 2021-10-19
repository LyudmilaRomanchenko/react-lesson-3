// Реализация на хуках

import { useState, useEffect } from "react";

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [value, setValue] = useState(0);
  // setValue(counterA + counterB);

  const handleCounterAIncrement = () => {
    setCounterA((state) => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((state) => state + 1);
  };

  useEffect(() => {
    console.log("ffffffffffffff");
    const totalClick = counterA + counterB;
    setValue(totalClick);
    document.title = `Кликнули ${totalClick}`;
    console.log(document.title);
    // document.querySelector("span") = totalClick;

    // console.log(document.querySelector("span"));
  }, [counterA, counterB, value]);

  return (
    <div>
      {/* <span>{counterA + counterB}</span> */}
      <span>{value}</span>
      <button type="button" onClick={handleCounterAIncrement}>
        Клилнули counterA {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули counterB {counterB} раз
      </button>
    </div>
  );
}

// Реализация на классах

// import React from "react";

// class Counter extends React.Component {
//   static defaultProps = {
//     initualValue: 0,
//   };

//   state = {
//     value: this.props.initualValue,
//   };

//   handleIncrement = (e) => {
//     const { target } = e;
//     console.log("ggggggggg");
//     console.log(target);
//     // const { value } = this.state;
//     this.setState((prevState) => {
//       return {
//         value: prevState.value - 1,
//       };
//     });
//   };

//   handleDecrement = (e) => {
//     console.log("hhhhhhhhh");
//     console.log(e.type);
//     // e.type !== "click"
//     //   ? console.log("yyyyyyyyyyyyy")
//     //   : console.log("jjjjjjjjjj");
//     this.setState((prevState) => {
//       return {
//         value: prevState.value + 1,
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Уменьшить
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Увеличить
//         </button>
//       </div>
//     );
//   }
// }

// // const Counter = () => {
// //   return (
// //     <div>
// //       <span>0</span>
// //       <button type="button">Уменьшить</button>
// //       <button type="button">Увеличить</button>
// //     </div>
// //   );
// // };

// export default Counter;
