<template>
  <div class="home" >
    <form @submit.prevent="getPlayerName">
      <div class="form-group">
        <label for="payerNamme">Enter your name: </label>
        <input v-model="playerName" type="text" class="form-control" id="payerNamme" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>

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
      this.playerName = ''
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
