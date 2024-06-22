export interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}
export interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    score: number;
    userAnswers: string[];
}