import { defineStore } from "pinia";
import { shuffle } from "../shuffle";

const QUESTIONS_PER_GAME = 10;

function buildQuestion(example) {
  const passTrap =
    "Nothing — this snippet already meets the criterion, even though a couple of details might look suspicious at first glance.";
  const correctAnswer = example.correctAnswer;
  const wrongOptions =
    example.type === "pass"
      ? example.distractors
      : [...example.distractors, passTrap];

  const options = shuffle([correctAnswer, ...wrongOptions]).slice(0, 4);
  if (!options.includes(correctAnswer)) {
    options[0] = correctAnswer;
  }

  return {
    id: example.id,
    ruleId: example.ruleId,
    type: example.type,
    snippetLang: example.snippetLang,
    snippet: example.snippet,
    options: shuffle(options),
    correctAnswer,
  };
}

export const useGameStore = defineStore("game", {
  state: () => ({
    status: "idle", // idle | loading | playing | finished | error
    questions: [],
    currentIndex: 0,
    score: 0,
    selectedOption: null,
    revealed: false,
    bestScore: 0,
    history: [],
  }),

  getters: {
    currentQuestion(state) {
      return state.questions[state.currentIndex] ?? null;
    },
    isLastQuestion(state) {
      return state.currentIndex === state.questions.length - 1;
    },
    progressLabel(state) {
      return `Question ${state.currentIndex + 1} of ${state.questions.length}`;
    },
  },

  actions: {
    async startGame() {
      this.status = "loading";
      try {
        const response = await fetch("/game-data.json");
        if (!response.ok) throw new Error("Failed to load game data");
        const examples = await response.json();

        this.questions = shuffle(examples)
          .slice(0, QUESTIONS_PER_GAME)
          .map(buildQuestion);
        this.currentIndex = 0;
        this.score = 0;
        this.selectedOption = null;
        this.revealed = false;
        this.status = "playing";
      } catch (error) {
        this.status = "error";
      }
    },

    selectOption(option) {
      if (this.revealed) return;
      this.selectedOption = option;
      this.revealed = true;
      if (option === this.currentQuestion.correctAnswer) {
        this.score += 1;
      }
    },

    nextQuestion() {
      if (this.isLastQuestion) {
        this.finishGame();
        return;
      }
      this.currentIndex += 1;
      this.selectedOption = null;
      this.revealed = false;
    },

    finishGame() {
      this.status = "finished";
      this.bestScore = Math.max(this.bestScore, this.score);
      this.history.unshift({
        date: new Date().toISOString(),
        score: this.score,
        total: this.questions.length,
      });
      this.history = this.history.slice(0, 10);
    },

    playAgain() {
      this.startGame();
    },
  },

  persist: {
    paths: ["bestScore", "history"],
  },
});
