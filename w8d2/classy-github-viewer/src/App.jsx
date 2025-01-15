import { Component } from "react";

import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";

import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { commits: null, repo: null };
  }

  fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    this.setState({ ...this.state, repo });
    axios
      .get(url)
      .then((res) => this.setState({ ...this.state, commits: res.data }))
      .catch((err) => {
        console.log(err);
        this.setState({ ...this.state, commits: null });
      });
  };

  render() {
    return (
      <>
        <Header />
        <RepoForm onSubmit={this.fetchCommits} />
        <section>
          {this.state.repo && <h1>Commits for {this.state.repo}</h1>}
          {this.state.commits && <CommitList commits={this.state.commits} />}
        </section>
      </>
    );
  }
}
