import gitQuiz from "./data/git-quiz";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapQuizCategory = (quiz: any[], category: string) => {
  return quiz.map(q => ({ ...q, Category: category }));
};
export const ALL_CATEGORIES = [
  ...mapQuizCategory(gitQuiz, "Git"),

];

export const ROUNDED_QUESTION_COUNT = 2;
