import React, { useState } from "react";
import "../css/main.css";
import "../css/Questions.css";

export default function Questions() {
  const data = [
    {
      question: "How are you feeling today?",
      a: "Happy",
      b: "Angry",
      c: "Sad",
      d: "Anxious",
    },
    {
      question: "Overall how would you rate your mental health?",
      a: "Excellent",
      b: "Good",
      c: "Average",
      d: "Poor",
    },
    {
      question: "Have you felt particularly low in the past week?",
      a: "Yes",
      b: "No",
      c: "Somewhat",
      d: "Not Sure",
    },
    {
      question: "How many hours do you sleep?",
      a: "9+",
      b: "7-9",
      c: "4-6",
      d: "Less than 4",
    },
    {
      question: "How is your quality of sleep?",
      a: "Very Good",
      b: "Good",
      c: "Normal",
      d: "Bad",
    },
    {
      question: "Do you Smoke or Drink?",
      a: "No",
      b: "Once a month",
      c: "Once a week",
      d: "Everyday",
    },
    {
      question: "How active are you physically?",
      a: "Heavy physical activities",
      b: "Moderate physical activities",
      c: "Light physical activities",
      d: "No physical activities",
    },
  ];
  let current = 0;
  const quiz = document.getElementById("quiz");
  const answer1 = document.querySelectorAll(".answer");
  var [question1, setQuestion] = useState("");
  var [a_text, setA] = useState("");
  var [b_text, setB] = useState("");
  var [c_text, setC] = useState("");
  var [d_text, setD] = useState("");

  function load() {
    deselectAnswers();
    const currentData = data[current];
    setQuestion(currentData.question);
    setA(currentData.a);
    setB(currentData.b);
    setC(currentData.c);
    setD(currentData.d);
    console.log(current);
  }
  function deselectAnswers() {
    answer1.forEach((answer1) => (answer1.checked = false));
  }
  function getSelected() {
    let answer;
    answer1.forEach((answer1) => {
      if (answer1.checked) {
        answer = answer1.id;
      }
    });
    return answer;
  }
  function submit() {
    const answer = getSelected();
    if (answer) {
      console.log(current);
      current++;
    }
    if (current < data.length) {
      load();
    } else {
      quiz.innerHTML = `<h2 style="text-align: center font-weight:bold;">Thank you for answering the questions.

            <button onclick="location.replace('/home')">Continue</button>
        `;
    }
  }
  return (
    <div className="body">
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <h2 id="question">{question1}</h2>
          <ul>
            <li>
              <input type="radio" name="answer" id="a" className="answer" />
              <label htmlFor="a" id="a_text">
                {a_text}
              </label>
            </li>
            <li>
              <input type="radio" name="answer" id="b" className="answer" />
              <label htmlFor="b" id="b_text">
                {b_text}
              </label>
            </li>
            <li>
              <input type="radio" name="answer" id="c" className="answer" />
              <label htmlFor="c" id="c_text">
                {c_text}
              </label>
            </li>
            <li>
              <input type="radio" name="answer" id="d" className="answer" />
              <label htmlFor="d" id="d_text">
                {d_text}
              </label>
            </li>
          </ul>
        </div>
        <button id="submit" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}
