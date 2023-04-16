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
        d: "Anxious"
    },
    {
        question: "Overall how would you rate your mental health?",
        a: "Excellent",
        b: "Good",
        c: "Average",
        d: "Poor"
    },
    {
        question: "Have you felt particularly low in the past week?",
        a: "Yes",
        b: "No",
        c: "Somewhat",
        d: "Not Sure"
    },
    {
        question: "How many hours do you sleep?",
        a: "9+",
        b: "7-9",
        c: "4-6",
        d: "Less than 4"
    },
    {
        question: "How is your quality of sleep?",
        a: "Very Good",
        b: "Good",
        c: "Normal",
        d: "Bad"
    },
    {
        question: "Do you Smoke or Drink?",
        a: "No",
        b: "Once a month",
        c: "Once a week",
        d: "Everyday"
    },
    {
        question: "How active are you physically?",
        a: "Heavy physical activities",
        b: "Moderate physical activities",
        c: "Light physical activities",
        d: "No physical activities"
    },
];
const quiz = document.getElementById('quiz');
const answer1 = document.querySelectorAll('.answer');
const question1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let current=0;
function load(){
    deselectAnswers();
    const currentData = data[current];
    question1.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}
function deselectAnswers(){
    answer1.forEach(answer1=>answer1.checked = false);
}
function getSelected(){
    let answer;
    answer1.forEach(answer1=>{
        if(answer1.checked){
            answer = answer1.id;
        }
    })
    return answer;
}
function submit(){
    const answer = getSelected();
    if(answer){
        current++;
    }
    if(current<data.length){
        load();
    }
    else{
      quiz.innerHTML = `<h2 style="text-align: center font-weight:bold;">Thank you for answering the questions.

      <button onclick="location.replace('/home')">Continue</button>
  `
    }
}
  return (
    <div className="body">
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
        <h2 id="question">{data[0].question}</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="a" class="answer"/>
                        <label for="a"  id="a_text">{data[0].a}</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="b" class="answer"/>
                        <label for="b"  id="b_text">{data[0].b}</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="c" class="answer"/>
                        <label for="c"  id="c_text">{data[0].c}</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="d" class="answer"/>
                        <label for="d"  id="d_text">{data[0].d}</label>
                    </li>
                </ul>
            </div>
            <button id="submit" onClick={submit}>Submit</button>
        </div>
      </div>
  );
}

