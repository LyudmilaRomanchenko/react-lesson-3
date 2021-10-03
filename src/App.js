// import logo from './logo.svg';
import "./App.css";
import Counter from "./components/Counter/Counter";
import DropDown from "./components/DropDown/DropDown";
// import ColorPicker f
// console.log(DropDown);
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Input from "./components/Input/Input";
import React from "react";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends React.Component {
  state = {
    todos: "",
  };

  renderForm = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <Counter initualValue={100} />
        <DropDown />
        <ColorPicker options={colorPickerOptions} />
        <Input onSubmit={this.renderForm} />
      </div>
    );
  }
}

export default App;
