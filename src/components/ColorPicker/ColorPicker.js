import React from "react";
import "./ColorPicker.css";

class ColorPicker extends React.Component {
  state = {
    activeOptionsIndx: 0,
  };

  setActiveInd = (index) => {
    this.setState({
      activeOptionsIndx: index,
    });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeOptionsIndx) {
      optionClasses.push("ColorPicker__option--active ");
    }
    return optionClasses.join(" ");
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveInd(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
