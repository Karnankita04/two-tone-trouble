import { Component } from "react";

class ShowOutput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Output</h1>
        <div
          style={{
            backgroundColor: this.props.color.first,
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: this.props.color.second,
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
    );
  }
}

class ShowColors extends Component {
  constructor(props) {
    super(props);
    this.state = { color: { first: "#e8cbc0", second: "#636fa4" } };
    this.data = [
      { first: "#ffdab9", second: "#ffb6c1", cId: 1 },
      { first: "#0077be", second: "#00c6fa", cId: 2 },
      { first: "#e6e7fa", second: "#d8bfd9", cId: 3 },
      { first: "#f38c78", second: "#fec1b4", cId: 4 },
    ];
    this.handleClickedBox = this.handleClickedBox.bind(this);
  }

  handleClickedBox = (id) => {
    const color = this.data.find((color) => color.cId === id);
    if (color) {
      this.setState({
        color: { first: color.first, second: color.second },
      });
    }
  };

  render() {
    return (
      <div>
        {this.data.map((color, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                marginBottom: "20px",
                cursor: "pointer",
              }}
              onClick={() => this.handleClickedBox(color.cId)}
            >
              <div
                style={{
                  backgroundColor: color.first,
                  width: "100px",
                  height: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: color.second,
                  width: "100px",
                  height: "100px",
                }}
              ></div>
            </div>
          );
        })}

        <ShowOutput color={this.state.color} />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ShowColors />;
  }
}

const colors = [
  { first: "#ffdab9", second: "#ffb6c1", cId: 1 },
  { first: "#0077be", second: "#00c6fa", cId: 2 },
  { first: "#e6e7fa", second: "#d8bfd9", cId: 3 },
  { first: "#f38c78", second: "#fec1b4", cId: 4 },
];

export default App;
