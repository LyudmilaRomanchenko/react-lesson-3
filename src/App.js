// import logo from './logo.svg';
import "./App.css";
import Counter from "./components/Counter/Counter";
import DropDown from "./components/DropDown/DropDown";
// import ColorPicker f
// console.log(DropDown);
import ColorPicker from "./components/ColorPicker/ColorPicker";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter initualValue={100} />
      <DropDown />
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
}

export default App;
