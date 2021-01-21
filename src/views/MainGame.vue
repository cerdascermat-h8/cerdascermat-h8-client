<template>
  <div>
    <!-- <div class="container">
      <div class="col-md-2 score">
        <div class="row">
          Score {{ getScore }} and Player 1
        </div>
        <div class="row">
          Score and Player 1
        </div>
      </div>
      <div class="row">
        <question-board />
      </div>
    </div> -->
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
