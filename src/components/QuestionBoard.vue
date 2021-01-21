<template>
  <div class="col">
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
  </div>
</template>

<script>
export default {
  name: 'QuestionBoard',
  methods: {
    fetchQuestions () {
      this.$store.dispatch('fetchQuestions')
    },
    selectAnswer (value) {
      console.log('ALLLO', value)
      const correctAnswer = this.currentQuestion.correct_answer
      if (correctAnswer === value) {
        console.log('druuue')
        this.$store.dispatch('setPlayerScore', 10)
      } else {
        console.log('vi lost')
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
    answers () {
      return this.$store.state.questions[this.$store.state.currentQuestion]
    }
  },
  created () {
    this.fetchQuestions()
  }
}

</script>

<style>

</style>
