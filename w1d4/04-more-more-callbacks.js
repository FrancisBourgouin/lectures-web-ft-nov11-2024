// Complex conditions!

const grade = {
  score: 79,
  subject: "mathematics",
};

const anotherGrade = {
  score: 60,
  subject: "music",
};

// CrazyParents: Want you to have 99+ in everything, no matter what
// SciencyParents: They want you to have at least 80 in science subjects (math, science, etc)
// RandomParents: They will be happy, or mad, no matter the grade

const crazyParents = (grade) => grade.score >= 99;
const sciencyParents = (grade) => {
  if (grade.subject === "mathematics" || grade.subject === "science") {
    return grade.score >= 80;
  }

  return grade.score >= 60;
};
const randomParents = () => Math.random() > 0.5

const outputParentReaction = (grade, parentEvaluator) => {
  const happy = parentEvaluator(grade);

  if (happy) {
    console.log("GOOD JOB");
  } else {
    console.log("I AM DISAPPOINT");
  }
};


outputParentReaction(grade, sciencyParents)
outputParentReaction(anotherGrade, sciencyParents)