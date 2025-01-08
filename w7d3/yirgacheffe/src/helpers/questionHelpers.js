export const updateLike = (forumPost, replyId, isUpvote) => {
  const updatedForumPost = { ...forumPost };

  const updatedReplies = [...forumPost.replies];

  const updatedReplyIndex = updatedReplies.findIndex(
    (reply) => reply.id === String(replyId)
  );

  const updatedReply = { ...updatedReplies[updatedReplyIndex] };

  updatedReply.likes += isUpvote ? 1 : -1;

  updatedReplies[updatedReplyIndex] = updatedReply;
  updatedForumPost.replies = updatedReplies;

  return updatedForumPost;
};

export const createReply = (forumPost, reply, authorId) => {
  const newReply = {
    id: String(forumPost.replies.length + 1),
    likes: 0,
    authorId,
    content: reply,
  };

  // const updatedForumPost = { ...forumPost };
  // const updatedReplies = [...forumPost.replies, newReply];

  // updatedForumPost.replies = updatedReplies

  const updatedForumPost = { ...forumPost, replies: [...forumPost.replies, newReply] };

  return updatedForumPost;
};
