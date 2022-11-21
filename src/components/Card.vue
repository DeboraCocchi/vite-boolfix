<script>
import {store} from '../data/store'
export default {
  name:'Card',
  props:{
    movie:Object
  },
  data(){
    return{
      store
    }
  }
}
</script>
<template>
  <div class="card col-2">
  <img :src="`${store.imgUrl}${movie.poster_path}`" class="card-img-top" :alt="movie.title">
  <div class="card-body">
    <p class="card-text">{{movie.title}}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>