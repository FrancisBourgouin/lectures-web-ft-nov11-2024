const forumPost = {
  authorId: "5", // Author ID between 1 and 6
  id: "3", // Unique post ID
  title: "Coffee Recommendations",
  question:
    "I'm a coffee enthusiast, and I'm always looking for new coffee experiences. Can you recommend any unique coffee shops or hidden gems in our city? I appreciate your suggestions!",
  likes: 0, // Always 0 likes
  replies: [
    {
      id: "1", // Unique reply ID
      authorId: "2", // Author ID between 1 and 6
      content:
        "You should check out Brew Haven on 5th Avenue. They have a great selection of artisanal coffees!",
      likes: 0, // Always 0 likes
    },
    {
      id: "2", // Unique reply ID
      authorId: "4", // Author ID between 1 and 6
      content:
        "Cafe L'Amour in the old town district is a cozy spot with a unique atmosphere. You'll love it!",
      likes: 0, // Always 0 likes
    },
  ],
};

const immutableUpdateLike = (forumPost, replyId, isUpvote) => {
  const updatedForumPost = { ...forumPost };

  const updatedReplies = [...forumPost.replies];

  const updatedReplyIndex = updatedReplies.findIndex((reply) => reply.id === String(replyId))

  const updatedReply = { ...updatedReplies[updatedReplyIndex] };

  replyToChange.likes += isUpvote ? 1 : -1;

  updatedReplies[updatedReplyIndex] = updatedReply
  updatedForumPost.replies = updatedReplies

  return updatedForumPost
};

immutableUpdateLike(forumPost, 1, true);

// Add a like / dislike to a reply

const updateLike = (forumPost, replyId, isUpvote) => {
  const replyToChange = forumPost.replies.find((reply) => replyId === reply.id);

  replyToChange.likes += isUpvote ? 1 : -1;

  // Applied optimisticchange
  // optimisticTaskHere.then(...).catch(puttheolddataback)
  return forumPost;
};

// updateLike(forumPost, 1, true)
// updateLike(forumPost, 1, true)
// updateLike(forumPost, 1, true)
// updateLike(forumPost, 1, true)
// updateLike(forumPost, 1, true)

// [1, 2, 3, 4].map((num) => num * 2);
// [1, 2, 3, 4].map((num) => num * 2);
// [1, 2, 3, 4].map((num) => num * 2);
// [1, 2, 3, 4].map((num) => num * 2);
// [1, 2, 3, 4].map((num) => num * 2);

[1, 2, 3, 4].reverse();

// Add a reply
