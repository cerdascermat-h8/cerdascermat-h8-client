<template>
  <div>
    <div class="container">
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
    </div>
  </div>
</template>

<script>
import QuestionBoard from '../components/QuestionBoard'

export default {
  name: 'MainGame',
  components: {
    QuestionBoard
  },
  computed: {
    getScore () {
      return this.$store.state.currentScore
    }
  }
}
</script>

<style scoped>

</style>
