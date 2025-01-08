// ReplyListItem

import UserProfile from "./UserProfile";

// Props: User{}, Reply{}, updateVote()

// State: Likes?

export default function ReplyListItem(props) {
  const { user, reply, updateVote } = props;

  return (
    <article className="ReplyListItem">
      <UserProfile user={user}/>
      <p>{reply.content}</p>
      <div>
        <button onClick={() => updateVote(reply.id, true)}>⬆️</button>
        <span>{reply.likes}</span>
        <button onClick={() => updateVote(reply.id, false)}>⬇️</button>
      </div>
    </article>
  );
}
