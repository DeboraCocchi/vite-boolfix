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
    <img :src="`${store.imgUrl}${elem.poster_path}`" class="dc-card-img dc-card-front" :alt="elem.title">
    <div class="dc-card-overlay"></div>
    <div class="card-body dc-card-back d-none">
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
  @use '../styles/partials/variables' as *;

  .dc-card[data-v-c6c3362a]{
    width: calc(100% / 5);
    max-height:400px;
    aspect-ratio: 4 / 5;
    position:relative;
    padding:0;
    .dc-card-img{
      height:100%;
      width:100%;
      object-fit: cover;
    }
  }
  .dc-card-overlay{
    opacity: 0;
    border:1px solid $primary-red;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,0.8);
    color:white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(#000000, 0.2);
    transition: 0.5s;
    cursor: pointer;

    &::before {
      content: "\f129";
      font-size: 16px;
      font-family: "Font Awesome 5 Free"; 
      font-weight: 900;
    }
    &:hover,
    &:focus {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      box-shadow: none;
      border-radius: 0;
      opacity: 0.95;
      border:none;
    
    &::before {
      content: none;
    }
  }
  .dc-card-img:hover ~ &{
    opacity:1;
  }
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