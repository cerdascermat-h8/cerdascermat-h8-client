<template>
  <div id="question-answer-board">
    <div id="question" class="p-5" v-if="currentQuestion">
      Question #{{ getCurrentQuestion + 1 }}
      <p>{{ currentQuestion.question }}</p>
    </div>
    <div id="answer" class="row" v-if="currentQuestion">
      <div
        v-for="(option, idx) in getOptions"
        :key="idx" class="col-md-6"
        id="btn-answer"
        @click="selectAnswer(option)">
        <p
          class="element-animation1 btn btn-lg btn-primary btn-block">
            {{ optionKey[idx] }}. <span>{{ option }}.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'QuestionBoard',
  data () {
    return {
      optionKey: ['A', 'B', 'C', 'D']
    }
  },
  methods: {
    fetchQuestions () {
      this.$store.dispatch('fetchQuestions')
    },
    selectAnswer (value) {
      this.$store.dispatch('countDown')
      const correctAnswer = this.currentQuestion.correct_answer
      console.log(correctAnswer)
      if (correctAnswer === value) {
        this.$store.dispatch('setPlayerScore', 10)
        this.$socket.emit('increaseScore', {
          // name: this.playerName,
          name: this.$store.state.playerName,
          score: 10
        })
        // this.playerName = ''
      } else {
        this.$store.dispatch('setPlayerScoreMinus', 10)
        this.$socket.emit('decreaseScore', {
          // name: this.playerName,
          name: this.$store.state.playerName,
          score: 10
        })
        // this.playerName = ''
      }
    }
  },
  sockets: {
    gameOver (payload) {
      console.log(payload)
      Vue.swal({
        title: 'Game Over',
        text: payload,
        icon: 'error'
      })
      this.$router.push('/')
    }
  },
  computed: {
    currentQuestion () {
      return this.$store.state.questions[this.$store.state.currentQuestion]
    },
    getCurrentQuestion () {
      return this.$store.state.currentQuestion
    },
    getOptions () {
      return [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ]
    }
  },
  created () {
    this.fetchQuestions()
  }
}

</script>

<style>

</style>
