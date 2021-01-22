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
    currentScore: 0,
    timer: null,
    start: false,
    timeLeft: 0,
    timerInstance: 0
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
    },
    setTimer (state, payload) {
      state.timer = payload
    },
    setTimerStart (state, payload) {
      state.start = payload
    },
    setTimeLeft (state, payload) {
      state.timeLeft = payload
    },
    decreaseTimeLeft (state) {
      state.timeLeft -= 1
    },
    resetCurrentQuestion (state) {
      state.currentQuestion = 0
    }
  },
  actions: {
    handleSetPlayerName (context, payload) {
      context.commit('setPlayerName', payload)
      context.commit('resetCurrentQuestion')
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
      clearInterval(this.state.timerInstance)
      context.commit('setTimer', 0)
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
      console.log(this.state.currentQuestion)
      if (this.state.currentQuestion === 9) {
        Vue.swal({
          title: 'Success',
          text: `Your current score ${this.state.currentScore}`,
          icon: 'success'
        })
        // (new Vue()).$socket.emit('gameOver', this.state.playerName)
        this._vm.$socket.emit('gameOver', {
          playerName: this.state.playerName,
          currentScore: this.state.currentScore
        })
        this.state.playerName = ''
        this.state.currentScore = 0
        router.push('/')
      }
    },
    setPlayerScoreMinus (context, payload) {
      context.commit('setMinusScore', payload)
      context.commit('setCurrentQuestion')
      clearInterval(this.state.timerInstance)
      context.commit('setTimer', 0)
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
      if (this.state.currentQuestion === 9) {
        Vue.swal({
          title: 'Failed',
          text: `Your current score ${this.state.currentScore}`,
          icon: 'error'
        })
        // (new Vue()).$socket.emit('gameOver', this.state.playerName)
        this._vm.$socket.emit('gameOver', {
          playerName: this.state.playerName,
          currentScore: this.state.currentScore
        })
        this.state.playerName = ''
        this.state.currentScore = 0
        router.push('/')
      }
    },
    countDown (context) {
      context.dispatch('started')
      context.commit('setTimeLeft', 10)
      this.state.timerInstance = setInterval(() => {
        if (this.state.timeLeft <= 0) {
          clearInterval(this.state.timerInstance)
          context.commit('setCurrentQuestion')
          return context.dispatch('countDown')
        } else {
          context.commit('setTimer', this.state.timeLeft)
        }
        context.commit('decreaseTimeLeft')
      }, 1000)
    },
    started (context) {
      // this.state.start = true
      context.commit('setTimerStart', true)
    },
    SOCKET_init (context, payload) {
      console.log('server gan')
      console.log(payload)
    }
    // },
    // SOCKET_GAME_OVER (context, payload) {
    //   console.log('ini emit')
    //   this.$socket.emit()
    // }
  },
  modules: {
  }
})
