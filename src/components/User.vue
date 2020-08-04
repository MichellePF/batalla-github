<template>
  <div class="contain_wrap">
    <p>
      <input class="controls" v-model="name" type="text" placeholder="Nombre de Usuario"/>
      <button class="boton" @click="cargar_datos">Cargar</button>
    </p>
    
    <h3>{{name}} tiene:</h3>
    <p>Repositorios: {{repos}}</p>
    <p>Followers: {{follow}}</p>
    <p>Following: {{following}}</p>
    <p>Gists: {{gists}}</p>
    <p>Total Score: {{score}}</p>
  </div>
</template>

<script>
export default {
  name: 'UserOne',
  props: {
    usuario: String
  },

  data(){
    return{
      name: '',
      repos: 0,
      follow: 0,
      following: 0,
      gists: 0,
      score: 0
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
        this.score = this.repos + this.follow + this.following + this.gists;
        if(this.usuario == '1'){
            this.$store.commit('carga1', this.score)
        } else {
            this.$store.commit('carga2', this.score)
        }
      })
      .catch((error)=>{
        if(error.response.status == 404){
          alert('No se encontro el Usuario')
        }else {
          console.log(error)
        }
      })
    },
  }
}
</script>

<style>
.contain_wrap {
  width: 50%;
  text-align: center;
  border: 5px solid black;
  font-size: 25px;
  background: lightseagreen;
  color: white;
  margin: 15px;

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