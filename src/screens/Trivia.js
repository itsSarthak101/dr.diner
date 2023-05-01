import React from 'react'
import { useState } from 'react';
import '../css/Trivia.css'


const QuizComp = () => {
    var Questionbank = [
        {
            Question: "An ______ a day keeps the doctor away.",
            Answers: [
                { Answer: "Apple", isCorrect: true },
                { Answer: "Guava", isCorrect: false },
                { Answer: "Banana", isCorrect: false },
                { Answer: "Orange", isCorrect: false }
            ]
        },
        {
            Question: "______ was voted as UK's most popular dish in 2011",
            Answers: [
                { Answer: "Shahi Paneer", isCorrect: false },
                { Answer: "Chicken Tikka Masala", isCorrect: true },
                { Answer: "Baked Beans", isCorrect: false },
                { Answer: "Fish & chips", isCorrect: false }
            ]
        }, {
            Question: "What famous drink was invented in 1982?",
            Answers: [
                { Answer: "Coca Cola", isCorrect: true },
                { Answer: "Pepsi", isCorrect: false },
                { Answer: "Dr. Pepper", isCorrect: false },
                { Answer: "Mtn.Dew", isCorrect: false }
            ]
        },
        {
            Question: "What is the most expensive spice in the world?",
            Answers: [
                { Answer: "Saffron", isCorrect: true },
                { Answer: "Cardimom", isCorrect: false },
                { Answer: "Clove", isCorrect: false },
                { Answer: "Cinnamon", isCorrect: false }
            ]
        },
        {
            Question: "What food item is a good source of Omega-3? ",
            Answers: [
                { Answer: "Chicken", isCorrect: false },
                { Answer: "Spinach", isCorrect: false },
                { Answer: "Brocolli", isCorrect: false },
                { Answer: "Fish", isCorrect: true }
            ]
        },
        {
            Question: "Which country produces the largest amount of spices in the world?",
            Answers: [
                { Answer: "India", isCorrect: true },
                { Answer: "USA", isCorrect: false },
                { Answer: "UK", isCorrect: false },
                { Answer: "Iran", isCorrect: false }
            ]
        },
        {
            Question: "For what is Scoville scale used?",
            Answers: [
                { Answer: "Measure sweetness", isCorrect: false },
                { Answer: "Measure spiciness", isCorrect: true },
                { Answer: "Measure sourness", isCorrect: false },
                { Answer: "All of the above", isCorrect: false }
            ]
        }, {
            Question: "Which is the most popular dish in India",
            Answers: [
                { Answer: "Butter chicken", isCorrect: false },
                { Answer: "Biryani", isCorrect: true },
                { Answer: "Dal makhni", isCorrect: false },
                { Answer: "Shahi Paneer", isCorrect: false }
            ]
        },
        {
            Question: "Which is the hottest chili in the world?",
            Answers: [
                { Answer: "Carolina Reaper", isCorrect: false },
                { Answer: "Green Chili", isCorrect: false },
                { Answer: "Jalapeno", isCorrect: false },
                { Answer: "Ghost pepper", isCorrect: true }
            ]
        },
        {
            Question: "Which company produces Maggie?",
            Answers: [
                { Answer: "Sunfeast", isCorrect: false },
                { Answer: "Quaker", isCorrect: false },
                { Answer: "Nestle", isCorrect: true },
                { Answer: "Himalaya", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div id='main'>
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
        </div>
    );
}

export default QuizComp;