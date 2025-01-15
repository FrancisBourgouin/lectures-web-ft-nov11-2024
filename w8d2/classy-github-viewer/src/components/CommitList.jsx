import { Component } from "react";
import CommitListItem from "./CommitListItem";

export default class CommitList extends Component {
  constructor(props) {
    super(props);
  }

  report = () => console.log("Clicked on the page!")

  componentDidMount() {
    document.addEventListener("click", this.report );
  }

  componentWillUnmount(){
    document.removeEventListener("click", this.report)
  }

  componentDidUpdate(prevProps, prevState, props){
    if(prevState.commits = this.state.commits){
      //...
    }
  }

  render() {
    const { commits } = this.props;

    const parsedCommits = commits.map((commit) => (
      <CommitListItem key={commit.sha} commit={commit} />
    ));

    return <ul>{parsedCommits}</ul>;
  }
}
