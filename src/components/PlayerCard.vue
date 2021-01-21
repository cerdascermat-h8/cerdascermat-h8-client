<template>
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
              <div id="start-btn" v-if="getStart === false">
                  <button class="btn btn-primary btn-block" @click.prevent="countDown">START</button>
              </div>
              <div id="timer" v-if="getStart === true">
                  <p><span>{{getTimer}}</span>{{getTimer > 0 ? 's' : ''}}</p>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  data () {
    return {
    }
  },
  computed: {
    getScore () {
      return this.$store.state.currentScore
    },
    getStart () {
      return this.$store.state.start
    },
    getTimer () {
      return this.$store.state.timer
    }
  },
  methods: {
    countDown () {
      this.$store.dispatch('countDown')
    }
  }
}
</script>

<style>

</style>
