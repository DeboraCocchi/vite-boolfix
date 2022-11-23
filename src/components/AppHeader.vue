<script>
import {store} from '../data/store'
export default {
  name:'AppHeader',
  data(){
    return{
      store
    }
  }
}
</script>
<template>
  <header>
    <div class="container-fluid h-100">
      <div class="row align-items-center h-100 justify-content-between">
        <div class="col-2 logo align-items-center">
          <img src="/logo-boolflix.png" alt="Boolfix">
        </div>
        <div class="search-field col-4 d-flex">
          <span class="d-flex align-items-center justify-content-center"><i class="fa-solid fa-magnifying-glass"></i></span>
          <input type="search" id="boolsearch" name="boolsearch" placeholder="Cerca un film o una serie tv..." v-model="store.elementToSearch" @keyup.enter="$emit('cercaserie')">
          <select class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
          v-model="store.typeOf" @change="$emit('changeType')">
          <option class="dropdown-item" selected value="">Category</option>
          <option class="dropdown-item" value="movie">Film</option>
          <option class="dropdown-item" value="tv">Serie TV</option>
        </select>
        </div>
      </div>
    
    </div>
  </header>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables.scss' as *;
  header{
    height:70px;
    padding:7px;
    .logo>img{
      max-height:90%;
    }
    .search-field{
      justify-content: end;
      span{
        background-color: $primary-darkgrey;
        padding:10px;
        color:white;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .dropdown-toggle{
        background-color: $primary-red;
        color:white;
        outline:none;
        border:none;
        font-size:80%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      input[data-v-48a13218]{ 
        min-width: 200px ;
        font-size:80%;
        padding:5px;
        &:focus-visible{
          border-color:$primary-red;
          outline:$primary-red;
        }
      }
    }
  }
</style>