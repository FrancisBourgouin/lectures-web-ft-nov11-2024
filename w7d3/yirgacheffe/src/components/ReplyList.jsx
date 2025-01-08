// ReplyList

import ReplyListItem from "./ReplyListItem";

// Props: Replies[],  Users{}, updateVote()
// State:

export default function ReplyList(props) {
  const { replies, users, updateVote } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem
        key={reply.id}
        reply={reply}
        user={users[reply.authorId]}
        updateVote={updateVote}
      />
    ));
  return <section className="ReplyList">{parsedReplies}</section>;
}
