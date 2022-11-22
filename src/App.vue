<script>
import {store} from './data/store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Card from './components/Card.vue'

export default {
  name:'App',
  data(){
    return{
      store
    }
  },
  components:{
    AppHeader,
    AppMain,
    Card
  },
  methods:{
    firstLaunch(){
      let moviesFound = axios.get(store.trendUrl+store.apiKey+'&language=it-IT',
      {params: {media_type:'movie'}})
      let seriesFound = axios.get(store.trendUrl+store.apiKey+'&language=it-IT',
      {params: {media_type:'tv'}})
      .then(result => {
        store.movie = result.data.results
        console.log(store.movie);
        store.tv = result.data.results
        console.log(store.tv);
      })
      .catch( error =>{
        console.log(error);
      })
      store.isLoaded=true;
    },
    showResults(){
        if(store.typeOf===''){
          this.getApiCall('movie')
          this.getApiCall('tv')
        }else{
          this.getApiCall(store.typeOf)
        }
    },
    getApiCall(type){
      store.isLoaded = false;
      store[type]=[];
        axios.get(store.apiUrl+store.typeOf+'?api_key='+store.apiKey+'&query='+store.elementToSearch+'&language=it-IT')
      .then( result =>{
        store[type] = result.data.results;
        console.log(store[type]);
        store.isLoaded = true;
      })
      .catch( error =>{
        console.log(error);
      })
    }
  },
  created(){
    console.log('lanciata');
    this.firstLaunch();
  }
  
}
</script>

<template>

  <AppHeader @cercaserie="getApiCall" @changeType="getApiCall"/>
  <AppMain title="Film"/>
  <AppMain title="Serie TV"/>
</template>


<style lang="scss">
  @use './styles/general.scss';
</style>