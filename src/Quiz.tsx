import { useState } from 'react';
import { quizQuestions } from './data/quizData';
import { QuizState } from './types/quizTypes';

const Quiz = () => {
    const [quizState, setQuizState] = useState<QuizState>({
        questions: quizQuestions,
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: [],
    });

    const handleAnswer = (answer: string) => {
        const isCorrect = answer === quizState.questions[quizState.currentQuestionIndex].correctAnswer;
        const newScore = isCorrect ? quizState.score + 1 : quizState.score;
        setQuizState({
            ...quizState,
            score: newScore,
            userAnswers: [...quizState.userAnswers, answer],
        });
    }

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    return (
        <>
            <h1>Question 1 out of {quizState.questions.length}</h1>
            <div>
                {quizState.currentQuestionIndex < quizState.questions.length ? (
                    <div>
                        <h1>{currentQuestion.question}</h1>
                        <div>
                            {currentQuestion.answers.map((answer, index) => (
                                <button key={index} onClick={() => handleAnswer(answer)}>
                                    {answer}
                                </button>
                            ))}
                        </div>
                        <div>
                            <button onClick={() => setQuizState({ ...quizState, currentQuestionIndex: quizState.currentQuestionIndex + 1 })}>
                                Next
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>You scored {quizState.score} out of {quizState.questions.length}</h1>
                    </div>
                )}
            </div>
            <pre>{JSON.stringify(quizState, null, 2)}</pre>
        </>
    )
}

export default Quiz