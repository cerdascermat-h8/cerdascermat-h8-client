import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerName: '',
    questions: [],
    currentQuestion: 0,
    currentScore: 0
  },
  mutations: {
    setPlayerName (state, payload) {
      state.playerName = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    },
    setScore (state, payload) {
      state.currentScore += payload
    },
    setCurrentQuestion (state, payload) {
      state.currentQuestion++
    },
    setMinusScore (state, payload) {
      state.currentScore -= payload
    }
  },
  actions: {
    handleSetPlayerName (context, payload) {
      context.commit('setPlayerName', payload)
      router.push('/main')
    },
    fetchQuestions (context) {
      axios({
        method: 'GET'
      })
        .then(res => {
          context.commit('setQuestions', res.data.results)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    setPlayerScore (context, payload) {
      context.commit('setScore', payload)
      context.commit('setCurrentQuestion')
      Vue.swal({
        title: 'Success',
        text: 'Nice ez +10 pts',
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      })
      if (this.state.currentQuestion === 9) {
        Vue.swal({
          title: 'Success',
          text: `Your current score ${this.state.currentScore}`,
          icon: 'success'
        })
        this.state.playerName = ''
        this.state.currentScore = 0
        router.push('/')
      }
    },
    setPlayerScoreMinus (context, payload) {
      context.commit('setMinusScore', payload)
      context.commit('setCurrentQuestion')
      Vue.swal({
        title: 'Error',
        text: 'Wrong answer ez -10 pts',
        icon: 'error',
        toast: true,
        position: 'top-end',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      })
    }
  },
  modules: {
  }
})
