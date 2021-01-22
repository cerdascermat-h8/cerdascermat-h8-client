<template>
  <div>
    <div class="container bg">
      <player-card />
      <question-board />
    </div>
  </div>
</template>

<script>
import QuestionBoard from '../components/QuestionBoard'
import PlayerCard from '../components/PlayerCard'
export default {
  name: 'MainGame',
  components: {
    QuestionBoard,
    PlayerCard
  }
}
</script>

<style scoped>

</style>
