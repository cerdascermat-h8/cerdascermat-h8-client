<template>
  <div class="home" >
    <form @submit.prevent="getPlayerName">
      <div class="form-group">
        <label for="payerNamme">Enter your name: </label>
        <input v-model="playerName" type="text" class="form-control" id="payerNamme" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="mt-3">
      <button @click.prevent="aturanMain" class="btn btn-primary">Aturan Main</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Home',
  data () {
    return {
      playerName: ''
    }
  },
  methods: {
    getPlayerName () {
      this.$store.dispatch('handleSetPlayerName', this.playerName)
      this.$socket.emit('newPlayer', {
        name: this.playerName,
        score: 0
      })
    },
    aturanMain () {
      Vue.swal({
        title: 'Aturan Main!',
        text: 'Siapa cepat sampai ke pertanyaan ke 10 dan nilai diatas 50 dia menang!!',
        icon: 'warning',
        confirmButtonText: 'Cool'
      })
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
    }
  }
}
</script>

<style scoped>

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

</style>
