import React from "react";
import { QuestionMultipleChoice } from "./QuestionMultipleChoice";
import { QuestionText } from "./QuestionText";

const Question = ({ question, setCurrentQuestion }) => {
  const selectChoice = (choice) => {
    choice.selected = !choice.selected;
    if (question.multiple === "false")
      question.choices.map((item) => {
        if (item.value !== choice.value) item.selected = false;
      });
    setCurrentQuestion({
      ...question,
    });
  };

  return (
    <div className="current-question">
      <h3 className="headline-question">{question.headline}</h3>
      {question.question_type === "multiple-choice" ? (
        <QuestionMultipleChoice
          question={question}
          onClick={(value) => selectChoice(value)}
        />
      ) : (
        <QuestionText
          question={question}
          updateQuestionTextState={(value) =>
            setCurrentQuestion({
              ...question,
              description: value,
            })
          }
        />
      )}
    </div>
  );
};

export default Question;
