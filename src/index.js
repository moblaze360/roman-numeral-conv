import React from "react";
import ReactDOM from "react-dom";
import ConvertInput from "./Input";
import ConvertOutput from "./Output";
import convertToRoman from "./convertToRoman";

import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      output: convertToRoman(e.target.value)
    });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="label">Convert Number To Roman</h1>
        <ConvertInput onChange={this.handleInput} />
        <ConvertOutput value={this.state.output} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
