<template>
  <!-- <div class="col">
    <div class="row">
      <div class="col-md-12">
        Soal {{ getCurrentQuestion + 1 }}
        <div class="row">
          <div class="col-md-12">
            {{ currentQuestion.question }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6" @click="selectAnswer('True')">
            <button class="btn btn-primary"> True </button>
          </div>
          <div class="col-md-6" @click="selectAnswer('False')">
            <button class="btn btn-primary"> False </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div id="question-answer-board">
    <div id="question" class="p-5">
      Question #{{ getCurrentQuestion + 1 }}
      <p>{{ currentQuestion.question }}</p>
    </div>
    <div id="answer" class="row">
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
      } else {
        this.$store.dispatch('setPlayerScoreMinus', 10)
      }
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
