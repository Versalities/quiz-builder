import React, { useState } from 'react';

const quizDataModel = {
    summary: '',
    questions: [],
    results: {

    }
}

const quizModes = [
    'Main',
    'Summary',
    'Questions',
    'Results'
]

export default function CreateQuiz() {
    const [quizData, changeQuizData] = useState(quizDataModel);
    const [creationMode, changeCreationMode] = useState('Main');

    const handleChangeQuizData = (keyToChange) => (newValue) => {
        changeQuizData({
            ...quizData,
            [keyToChange]: newValue
        })
    }

    function renderCreateQuizSegment() {
        switch (creationMode) {
            case 'Summary':
                return <QuizSummaryForm summary={quizData.summary} handleChange={handleChangeQuizData('summary')}/>
            case 'Questions':
                return <QuizQuestionsForm questions={quizData.questions} handleChange={handleChangeQuizData('questions')}/>
            case 'Results':
                return <QuizResultsForm results={quizData.results} handleChange={handleChangeQuizData('results')}/>
            default:
                return null;
        }
    }

    return (
        <div>
            <p>
                {`
                    Here you can create a Quiz by using three buttons.
                    - Add info
                    - Add question
                    - Add result
                    After completing every step, u can save the quiz.
                `}
            </p>
            <div>
                <button onClick={() => {changeCreationMode('Summary')}}>Summary</button>
                <button onClick={() => {changeCreationMode('Questions')}}>Questions</button>
                <button onClick={() => {changeCreationMode('Results')}}>Results</button>
            </div>
            {renderCreateQuizSegment()}
        </div>
    )
}

function QuizSummaryForm(props) {
    const { summary, handleChange } = props;

    function handleChangeSummary(e) {
        handleChange(e.target.value)
    }

    return (
        <div>
            <textarea 
                onChange={handleChangeSummary}
                value={summary}
            />
        </div>
    )
}

function QuizQuestionsForm() {
    return (
        <div>
            2
        </div>
    )
}

function QuizResultsForm() {
    return (
        <div>
            3
        </div>
    )
}