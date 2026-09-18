<script setup>
import { useGameStore } from "../stores/game";

const game = useGameStore();

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
</script>

<template>
  <div class="game-result">
    <h2>Game over</h2>
    <p class="game-result__score">{{ game.score }} / {{ game.questions.length }}</p>

    <button type="button" class="game-question__next" @click="game.playAgain()">
      Play again
    </button>

    <div v-if="game.history.length" class="game-result__history">
      <h3>Recent games</h3>
      <ul>
        <li v-for="entry in game.history" :key="entry.date">
          {{ formatDate(entry.date) }} — {{ entry.score }} / {{ entry.total }}
        </li>
      </ul>
    </div>
  </div>
</template>
