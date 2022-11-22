<script>
import {store} from '../data/store'
import Card from './Card.vue'
export default {
  name:'AppMain',
  props:{
    title:String
  },
  components:{
    Card
  },
  data(){
    return{
      store
    }
  }
}
</script>
<template>
  <main>
    <div class="container dc-cont">
      <h1>In tendenza</h1>
      <div class="row" v-show="store.typeOf ==='' || store.typeOf==='movie'">
        <h2>Film</h2>
        <Card v-for="movie in store.movie" :key="movie.id" :elem="movie"/>
      </div>
      <div class="row" v-show="store.typeOf ==='' || store.typeOf==='tv'">
        <h2>Serie TV</h2>
        <Card v-for="tvshow in store.tv" :key="tvshow.id" :elem="tvshow"/>
      </div>
    </div>
   
  </main>
</template>


<style lang="scss" scoped>
@use '../styles/general';
  main{
    height:calc(100vh - 70px);
    width:100vw;
    overflow-y: auto;
    background:linear-gradient(45deg, black, grey);
  }
</style>