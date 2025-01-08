import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";
import { forumPost } from "../data/postData";
import { useState } from "react";
import { updateLike, createReply } from "../helpers/questionHelpers";
import UserProfile from "./UserProfile";

// Question

// Props:  Users{}
// State: Question{}
// Helpers: updateVote(), addReply()

export default function Question(props) {
  const { users } = props;

  const [question, setQuestion] = useState(forumPost);

  const updateVote = (replyId, isUpvote) => {
    const updatedQuestion = updateLike(question, replyId, isUpvote);

    setQuestion(updatedQuestion);
  };

  const addReply = (formData) => {
    const updatedQuestion = createReply(question, formData.reply, formData.authorId);

    setQuestion(updatedQuestion);
  };

  return (
    <main className="Question">
      <header>
        <h1>{question.question}</h1>
        <UserProfile user={users[question.authorId]} />
      </header>
      <ReplyList replies={question.replies} users={users} updateVote={updateVote} />
      <ReplyForm addReply={addReply} users={users}/>
    </main>
  );
}
