<template>
  <div id="app" class="container">
    <div class="wrap">
      <User usuario="1"/>
      <User usuario="2"/>
    </div>
    <button  @click="comparar" class="boton">Comparar</button>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    User
  },
  methods: {
    comparar(ev){
      ev.preventDefault()
      const score1 = this.$store.state.puntaje1;
      const score2 = this.$store.state.puntaje2;
      if(score1 > score2){
        alert('Ha ganado user 1')
      }else if(score2 > score1){
        alert('Ha ganado user 2')
      }else {
        alert('Empate')
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrap {
  width: 100%;
  display: flex;
}

</style>
