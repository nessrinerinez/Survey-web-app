import React from "react";
import { FaCheck } from "react-icons/fa";

export const QuestionMultipleChoice = ({ question, onClick }) => {
  return (
    <div>
      <p className="question-type">
        (
        {question.multiple === "true"
          ? "You can select multiple choice"
          : "You can select only one choice"}
        )
      </p>
      <ul>
        {question.choices.map((choice) => (
          <li
            onClick={() => onClick(choice)}
            className={`li-choice ${
              choice.selected === true ? "selected" : ""
            }`}
            key={choice.value}
          >
            {choice.label}
            {choice.selected === true && (
              <FaCheck className="check-mark-icon" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
