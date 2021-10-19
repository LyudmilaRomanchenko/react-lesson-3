// Реализация на хуках

import { useState, useEffect } from "react";

export default function Input() {
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem("name")) ?? ""
  );
  const [tag, setTag] = useState(
    JSON.parse(window.localStorage.getItem("tag")) ?? ""
  );
  const [experience, setExperience] = useState("junior");
  console.log(name);
  console.log(setName);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);

    // if (name === "junior" || name === "middle" || name === "middle") {
    //   setExperience(value);
    // }

    switch (name) {
      case "name":
        setName(value);
        break;
      case "tag":
        setTag(value);
        break;
      case "experience":
        setExperience(value);
        break;
      default:
        return;
    }

    /////////////// Альтернативный вариант switch/////////////
    // if (name === "name") {
    //   setName(value);
    // }

    // if (name === "tag") {
    //   setTag(value);
    // }
    ////////////////////////
  };

  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem("tag", JSON.stringify(tag));
  }, [tag]);

  return (
    <form>
      <label>
        Имя
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Прозвище
        <input
          name="tag"
          type="text"
          value={tag}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Отправить</button>

      <p>Ваш уровень:</p>
      <lable>
        Junior
        <input
          name="experience"
          type="radio"
          value="junior"
          onChange={handleChange}
          checked={experience === "junior"}
        ></input>
      </lable>
      <lable>
        Middle
        <input
          name="experience"
          type="radio"
          value="middle"
          onChange={handleChange}
          checked={experience === "middle"}
        ></input>
      </lable>
      <lable>
        Senior
        <input
          name="experience"
          type="radio"
          value="senior"
          onChange={handleChange}
          checked={experience === "senior"}
        ></input>
      </lable>
      {/* <label>
        {" "}
        Белый
        <input
          name="licence"
          type="checkbox"
          value="white"
          checked={this.state.licence.white}
          onChange={this.handleCheced}
        ></input>
      </label>
      <label>
        {" "}
        Красный
        <input
          name="licence"
          type="checkbox"
          value="red"
          checked={this.state.licence.red}
          onChange={this.handleCheced}
        ></input>
      </label> */}
    </form>
  );
}

// Реализация на классах

// import React from "react";

// class Input extends React.Component {
//   state = {
//     name: "",
//     tag: "",
//     experience: "junior",
//     licence: {
//       white: false,
//       red: false,
//     },
//   };

//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     // console.log(event.currentTarget.name);
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   handleCheced = (event) => {
//     const { value } = event.currentTarget;
//     // console.log(value);
//     // this.setState({ [name]: value });
//     this.setState((prevState) => ({
//       licence: {
//         ...prevState.licence,
//         [value]: !prevState.licence[value],
//       },
//       //   [value]: !prevState.licence[value],
//     }));
//   };

//   //   console.log(prevState.licence[value])

//   // console.log(event.target.checked);
//   // console.log(event.target.value);

//   reset = () => {
//     this.setState({ name: "", tag: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Имя
//           <input
//             name="name"
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <label>
//           Прозвище
//           <input
//             name="tag"
//             type="text"
//             value={this.state.tag}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <button type="submit">Отправить</button>

//         <p>Ваш уровень:</p>
//         <lable>
//           Junior
//           <input
//             name="experience"
//             type="radio"
//             value="junior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "junior"}
//           ></input>
//         </lable>
//         <lable>
//           Middle
//           <input
//             name="experience"
//             type="radio"
//             value="middle"
//             onChange={this.handleChange}
//             checked={this.state.experience === "middle"}
//           ></input>
//         </lable>
//         <lable>
//           Senior
//           <input
//             name="experience"
//             type="radio"
//             value="senior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "senior"}
//           ></input>
//         </lable>
//         <label>
//           {" "}
//           Белый
//           <input
//             name="licence"
//             type="checkbox"
//             value="white"
//             checked={this.state.licence.white}
//             onChange={this.handleCheced}
//           ></input>
//         </label>
//         <label>
//           {" "}
//           Красный
//           <input
//             name="licence"
//             type="checkbox"
//             value="red"
//             checked={this.state.licence.red}
//             onChange={this.handleCheced}
//           ></input>
//         </label>
//       </form>
//     );
//   }
// }

// export default Input;
