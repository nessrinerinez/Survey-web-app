import React, { useState, useEffect } from "react";

export const QuestionText = ({ question, updateQuestionTextState }) => {
  const [response, setResponse] = useState(question.description || "");

  const onChangeTextResponse = (value) => {
    setResponse(value);
    updateQuestionTextState(value);
  };

  useEffect(() => {
    setResponse(question.description || "");
  }, [question]);

  return (
    <div>
      <p className="question-type">
        ({question.multiline === "true" ? "Multiple Line" : "Single Line"})
      </p>
      {question.multiline === "false" ? (
        <input
          className="input-text"
          value={response}
          name="response"
          aria-label="input-text"
          placeholder="Enter answer here ..."
          onChange={(e) => onChangeTextResponse(e.target.value)}
        />
      ) : (
        <textarea
          className="input-text"
          value={response}
          name="response"
          aria-label="text-area"
          placeholder="Enter answer here ..."
          onChange={(e) => onChangeTextResponse(e.target.value)}
        />
      )}
    </div>
  );
};
