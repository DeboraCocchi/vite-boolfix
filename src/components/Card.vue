<script>

import {store} from '../data/store'
export default {
  name:'Card',
  props:{
    elem:Object
  },
  data(){
    return{
      store,
      isPresent:true
    }
  },
  methods:{
    rating(number){
      if(number > 0){
        let newRating = (Math.floor(Math.round(number / 2)));
        let stars = [];
        for(let i=newRating; i>=1; i--){
          stars.push(`<i class="fa-solid fa-star" style="color:gold;"></i>`);
        };
        for(let j = (5 - newRating); j >= 1; j--){
          stars.push(`<i class="fa-regular fa-star"></i>`);
        }
        return stars.join('');
      }else{return 'Nessuna valutazione'}
    },
    getFlag(value){
      let flag;
      let flagPath = '/node_modules/flag-icons/flags/4x3/';
      switch(value){
        case 'en':
          flag = 'us.svg';
          break;
        case 'ja':
          flag = 'jp.svg';
          break;
        case 'fr':
          flag = 'fr.svg';
          break;
        case 'de':
          flag = 'de.svg';
          break;
        case 'es':
          flag = 'es.svg';
          break;
        case 'it':
          flag = 'it.svg';
          break;
        case 'ko':
          flag = 'kr.svg';
          break;
        case 'zh':
          flag = 'cn.svg';
          break;
        case 'ru':
          flag = 'ru.svg';
          break;
        default:
          flag='';
        }
        return flagPath+flag;
    }

  }
}
</script>
<template>
  <div class="dc-card card" v-show="elem.poster_path">
    <img :src="`${store.imgUrl}${elem.poster_path}`" class="card-img-top" :alt="elem.title">
    <div class="card-body">
      <h4 class="card-text">{{elem.title||elem.name}}</h4>
      <p class="card-sum">{{elem.overview}}</p>
      <p class="card-text">Lingua originale:
        <img
        v-if="isPresent===true"
        @load="isPresent=true"
        @error="isPresent=false"
        class="mini-flag"
        :src="getFlag(elem.original_language)"
        />
        <span v-else>{{elem.original_language}}</span>
      </p>
      <p class="card-text" v-html="rating(elem.vote_average)"></p>
    </div>
</div>
</template>


<style lang="scss" scoped>
  @use '../styles/general';
  .dc-card[data-v-c6c3362a]{
    width: calc(100% / 5)
  }
  .mini-flag{
    max-height:15px;
    border-radius:2px;
  }
  .card-sum{
    overflow-y:auto;
    overflow-x:hidden;
    max-height:50%;
  }

 
</style>