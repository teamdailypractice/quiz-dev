import gitQuiz from "./data/git-quiz";
import javaBasicsQuiz from "./data/java-basics-quiz";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapQuizCategory = (quiz: any[], category: string) => {
  return quiz.map(q => ({ ...q, Category: category }));
};
export const ALL_CATEGORIES = [
  ...mapQuizCategory(gitQuiz, "Git"),
  ...mapQuizCategory(javaBasicsQuiz, "Java Basics"),


];

export const ROUNDED_QUESTION_COUNT = 4;
