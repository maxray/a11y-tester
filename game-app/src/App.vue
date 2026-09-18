<script setup>
import { onMounted } from "vue";
import { useGameStore } from "./stores/game";
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";

const game = useGameStore();

onMounted(() => {
  if (game.status === "idle") {
    game.startGame();
  }
});
</script>

<template>
  <div class="game">
    <p v-if="game.status === 'loading'">Loading questions…</p>

    <p v-else-if="game.status === 'error'" role="alert">
      Couldn't load the game data. Try refreshing the page.
    </p>

    <Question v-else-if="game.status === 'playing'" />

    <Result v-else-if="game.status === 'finished'" />

    <p v-if="game.bestScore > 0 && game.status !== 'playing'" class="game__best">
      Best score: {{ game.bestScore }} / 10
    </p>
  </div>
</template>

<style>
.game {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: inherit;
}

.game__best {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  /* #595959 on white is ~7:1, comfortably above the 4.5:1 minimum */
  color: #595959;
}

.game-question__snippet {
  background: rgba(127, 127, 127, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.35rem;
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
}

.game-question__options {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.6rem;
  margin: 1.25rem 0;
}

.game-question__option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.65rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.game-question__option:hover:not(:disabled) {
  border-color: #1d4ed8;
}

.game-question__option:focus-visible {
  outline: 3px solid #1d4ed8;
  outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  /* #1d4ed8 drops to ~2.8:1 against a dark page background, well under
     the 3:1 minimum for UI component contrast (WCAG 1.4.11). */
  .game-question__option:hover:not(:disabled) {
    border-color: #8ab4f8;
  }

  .game-question__option:focus-visible {
    outline-color: #8ab4f8;
  }

  .game-question__next:focus-visible {
    outline-color: #8ab4f8;
  }
}

.game-question__option:disabled {
  cursor: default;
}

.game-question__option--correct {
  border-color: #15803d;
  background: #dcfce7;
  color: #14532d;
}

.game-question__option--incorrect {
  border-color: #b91c1c;
  background: #fee2e2;
  color: #7f1d1d;
}

.game-question__next {
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  background: #1d4ed8;
  color: #fff;
  font: inherit;
  cursor: pointer;
}

.game-question__next:focus-visible {
  outline: 3px solid #1d4ed8;
  outline-offset: 2px;
}

.game-result__score {
  font-size: 2rem;
  font-weight: 700;
}

.game-result__history {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
