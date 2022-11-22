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
      <div class="row">
        
        <Card v-for="movie in store.moviesList" :key="movie.id" :movie="movie"/>

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