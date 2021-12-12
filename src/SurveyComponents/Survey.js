import React, { useEffect, useState } from "react";
import Question from "./Question";

import "./styles/Question.css";

const Survey = () => {
  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState({});

  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);

  const getData = () => {
    fetch("/data/questionnaire.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setQuestions(myJson.questionnaire.questions);
        setCurrentQuestion(myJson.questionnaire.questions[0]);
      });
  };

  const updateCurrentQuestion = (value) => {
    setCurrentQuestion(value);
    questions.map((item) => {
      if (item.identifier === value.identifier) {
        item["description"] = value.description;
      }
    });
  };

  const isQuestionAnswered = (question) => {
    if (question.question_type === "multiple-choice") {
      let _isOneChoiceSelected = false;
      question.choices.map((choice) => {
        if (choice.selected === true) _isOneChoiceSelected = true;
      });
      return _isOneChoiceSelected;
    } else {
      return question.description ? true : false;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setCurrentQuestion({ ...questions[currentIndexQuestion] });
  }, [questions, currentIndexQuestion]);

  return (
    <>
      <div className="question-count">
        <span>
          Question {currentIndexQuestion + 1}/{questions.length}
        </span>
      </div>

      <Question
        question={currentQuestion}
        setCurrentQuestion={(value) => updateCurrentQuestion(value)}
      />

      <div className="answer-section">
        <button
          disabled={currentIndexQuestion === 0}
          className="question-index"
          onClick={() => setCurrentIndexQuestion((prevIndex) => prevIndex - 1)}
        >
          {"<"}
        </button>
        {questions.map((question, index) => (
          <button
            key={index}
            className={`question-index ${
              question.identifier === currentQuestion.identifier
                ? "is-active"
                : ""
            } ${isQuestionAnswered(question) ? "is-answered" : ""}`}
            onClick={() => setCurrentIndexQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentIndexQuestion === questions.length - 1}
          className="question-index"
          onClick={() => setCurrentIndexQuestion((prevIndex) => prevIndex + 1)}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Survey;
