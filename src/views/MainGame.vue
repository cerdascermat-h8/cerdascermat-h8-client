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
      <div class="d-flex flex-row player-timer">
          <div id="grup-player" class="d-flex flex-row">
              <div id="player" class="mr-2">
                  <div id="nama"> <p>nama</p> </div>
                  <div id="image-player"></div>
                  <div id="score-player"> <h2>{{ getScore }}</h2> </div>
              </div>
              <div id="player" class="mr-2">
                  <div id="nama"> <p>nama</p> </div>
                  <div id="image-player1"></div>
                  <div id="score-player"> <h2>0</h2> </div>
              </div>
              <div id="player" class="mr-2">
                  <div id="nama"> <p>nama</p> </div>
                  <div id="image-player"></div>
                  <div id="score-player"> <h2>0</h2> </div>
              </div>
              <div id="player" class="mr-2">
                  <div id="nama"> <p>nama</p> </div>
                  <div id="image-player1"></div>
                  <div id="score-player"> <h2>0</h2> </div>
              </div>
          </div>
          <div id="timer-board">
              <div id="start-btn">
                  <button class="btn btn-primary btn-block">START</button>
              </div>
              <div id="timer">
                  <p><span>10</span>s</p>
              </div>
          </div>
      </div>
      <question-board />
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
