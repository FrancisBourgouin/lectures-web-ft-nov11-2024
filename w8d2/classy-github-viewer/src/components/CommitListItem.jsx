export default function CommitListItem(props) {
  const { commit } = props;

  return (
    <li>
      <p>{commit.commit.message}</p>
      <p>
        By:{commit.author.login} on: {commit.commit.author.date}
      </p>
    </li>
  );
}
