<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>
      <input class="controls" v-model="name" type="text" placeholder="Nombre de Usuario"/>
      <button class="boton" @click="cargar_datos">Cargar</button>
    </p>
    
    <div class="wrap">
      <h1>{{name}} tiene:</h1>
      <p>Repositorios: {{repos}}</p>
      <p>Followers: {{follow}}</p>
      <p>Following: {{following}}</p>
      <p>Gists: {{gists}}</p>
      <p>Total Score: {{suma()}}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      name: 'MichellePF',
      repos: 0,
      follow: 0,
      following: 0,
      gists: 0
    }
  },
  methods: {
    cargar_datos(){
      this.axios.get(`https://api.github.com/users/${this.name}`)
      .then((datos) => {
        const user = datos.data;
        this.name = user.login;
        this.repos = user.public_repos;
        this.follow = user.followers;
        this.following = user.following;
        this.gists = user.public_gists;
      })
      .catch((error)=>{
        alert(error);
      })
    },
    suma(){
      let total = this.repos + this.follow + this.following + this.gists
      return total;
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
  margin: auto;
  height: auto;
  width: 800px;
  text-align: center;
  border: 5px solid black;
  font-size: 25px;
  background: lightseagreen;
  color: white;

}
.boton {
  width: 20%;
  background: #1f53c5;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}

.boton:hover {
  background: green;
}

.controls {
  width: 25%;
  background: #24303c;
  padding: 10px;
  border-radius: 4px;
  margin: 16px;
  border: 1px solid #1f53c5;
  font-family: 'calibri';
  font-size: 18px;
  color: white;
}

</style>
