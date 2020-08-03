<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{name}} tiene:</h1>
    <div class="wrap">
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
      name: '',
      repos: 0,
      follow: 0,
      following: 0,
      gists: 0
    }
  },
  methods: {
    suma(){
      let total = this.repos + this.follow + this.following + this.gists
      return total;
    }
  },
  mounted(){
    this.axios.get("https://api.github.com/users/MichellePF")
    .then((datos) => {
      const michelle = datos.data;
      this.name = michelle.login;
      this.repos = michelle.public_repos;
      this.follow = michelle.followers;
      this.following = michelle.following;
      this.gists = michelle.public_gists;
    })
    .catch((error)=>{
      alert(error);
    })
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
    border: 2px solid black;
    font-size: 25px;
}
ul {
    list-style: none;
}
</style>
