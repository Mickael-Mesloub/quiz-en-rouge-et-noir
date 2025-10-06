import { create } from "zustand";

interface QuizState {
  currentQuestionIndex: number;
  nextQuestion: () => void;
}

// TODO: add persistency to save quiz state (e.g. in local storage) in case of page reloading
// TODO: add score
// TODO: add reset when endQuiz function is triggered

const useQuizStore = create<QuizState>()((set) => ({
  currentQuestionIndex: 0,
  nextQuestion: () => {
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 }));
  },
}));

export const useQuizState = () => useQuizStore((state) => state);
export const useCurrentQuestionIndex = () =>
  useQuizStore((state) => state.currentQuestionIndex);
export const useNextQuestion = () =>
  useQuizStore((state) => state.nextQuestion);
