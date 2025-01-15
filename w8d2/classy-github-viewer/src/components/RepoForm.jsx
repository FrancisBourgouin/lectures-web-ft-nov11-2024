// WE NEED A STATE, WE NEED CLASSES

import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.initialData = { owner: "", repo: "" };
    this.state = this.initialData;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    const updatedState = { ...this.state };
    updatedState[name] = value;

    this.setState(updatedState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState(this.initialData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter the owner"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter the repo"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}
