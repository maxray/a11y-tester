<script setup>
import { useGameStore } from "../stores/game";

const game = useGameStore();

function optionClass(option) {
  if (!game.revealed) return "";
  if (option === game.currentQuestion.correctAnswer) {
    return "game-question__option--correct";
  }
  if (option === game.selectedOption) {
    return "game-question__option--incorrect";
  }
  return "";
}
</script>

<template>
  <div v-if="game.currentQuestion" class="game-question">
    <p class="game-question__progress">
      {{ game.progressLabel }} · Score: {{ game.score }}
    </p>

    <h2 class="game-question__title">{{ game.currentQuestion.title }}</h2>
    <pre class="game-question__snippet"><code>{{ game.currentQuestion.snippet }}</code></pre>

    <p id="question-prompt">What's going on here?</p>
    <ul class="game-question__options" aria-labelledby="question-prompt">
      <li v-for="option in game.currentQuestion.options" :key="option">
        <button
          type="button"
          class="game-question__option"
          :class="optionClass(option)"
          :disabled="game.revealed"
          :aria-pressed="game.selectedOption === option"
          @click="game.selectOption(option)"
        >
          {{ option }}
        </button>
      </li>
    </ul>

    <p v-if="game.revealed" role="status">
      {{ game.selectedOption === game.currentQuestion.correctAnswer
        ? "Correct!"
        : "Not quite." }}
    </p>

    <button
      v-if="game.revealed"
      type="button"
      class="game-question__next"
      @click="game.nextQuestion()"
    >
      {{ game.isLastQuestion ? "See results" : "Next question" }}
    </button>
  </div>
</template>
