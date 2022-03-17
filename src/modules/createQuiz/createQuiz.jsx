import React, { useState } from 'react';

export default function CreateQuiz() {
    const [quizData, changeQuizData] = useState({});

    return (
        <div>
            <p>
                Here you can create a Quiz by using three buttons.
                - Add info
                - Add question
                - Add result
            </p>
            <QuizCreationForm />
        </div>
    )
}

function QuizCreationForm() {
    return (
        <div>

        </div>
    )
}