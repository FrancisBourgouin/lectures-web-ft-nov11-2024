import { useEffect } from "react";
import CommitListItem from "./CommitListItem";
import axios from "axios";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits = commits.map((commit) => (
    <CommitListItem key={commit.sha} commit={commit} />
  ));

  useEffect(() => {
    const report = () => console.log("Clicked on the page!");
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  }, []);


  // useEffect(() => {
  //   axios.get()

  //   return () => axios.clearRequest
  // })

  return <ul>{parsedCommits}</ul>;
}
