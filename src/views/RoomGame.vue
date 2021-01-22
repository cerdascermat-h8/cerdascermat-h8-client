<template>
  <div>
      <div class="container row">
      <div v-for="(rm, i) in roomName"
      :key="i">
      <div @submit.prevent="goToMain" class="col-sm item-room">
          <button type="submit" class="btn btn-primary" style="padding:40px;" key="i">{{rm}}</button>
      </div>
      </div>
      </div>
    <div class="add-name-room" >
    <form @submit.prevent="addRoomName">
      <div class="form-group">
        <label for="payerNamme">Add now room: </label>
        <input v-model="newRoom" type="text" class="form-control" id="payerNamme" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <button type="submit" class="btn btn-primary">Add room</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'roomGame',
  data () {
    return {
      roomName: ['General', 'newbie', 'proplayer', 'nightmare'],
      newRoom: ''
    }
  },
  methods: {
    addRoomName () {
      this.roomName.push(this.newRoom)
      this.newRoom = ''
    }
  }
}
</script>

<style>
.container {
    display: flex;
    padding: 20px;
    justify-content: center;
    align-content: center;
}
.item-room {
    padding: 10px;
}
.add-name-room {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 40vh;
}
</style>
