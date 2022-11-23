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
          stars.push(`<i class="fa-regular fa-star" style="color:$primary-darkgrey"></i>`);
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
    },
    getImg(el){
      if(el.poster_path!==0){
        return `${store.imgUrl}${el.poster_path}`
      }else{
        return '../assets/placeholder.png'
      }
    }

  }
}
</script>
<template>

  <!-- codice di prova per malfunzionamento overflow--->
  <div class="mia-card">
  
    <img v-if="elem.poster_path" :src="store.imgUrl+elem.poster_path" class="dc-card-img dc-card-front" :alt="elem.title">
    <img v-else src="../assets/placeholder.png" class="dc-card-img dc-card-front" :alt="elem.title">
  

    <div class="info-container">
      <h4 class="card-text">{{elem.title||elem.name}}</h4>
      <p class="mia-sum mt-3">{{elem.overview}}</p>
      <p class="card-text mt-3">Lingua originale:
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

  .mia-card{
    width: calc(100% / 5);
    max-height:450px;
    position:relative;
    padding:0;
    transition:all 0.5s ease-in;
    overflow: hidden;
    &>img{
      height:100%;
      width:100%;
      object-fit: cover;
      border-radius:5px;
      transition:all 0.5s ease-in-out;}
    .info-container{
      background-color: rgba(0,0,0,0.75);
      color:white;
      position:absolute;
      opacity:0;
      height:100%;
      width:100%;
      top:0;
      left:0;
      padding:12px;
      font-size:90%;
      overflow-y:auto;
      transition:all 0.5s ease-in-out;
      h4 {
      margin-bottom: 6px;
      font-size:1.2rem;
      }
      p{
        font-size:0.8rem;
        line-height: 0.8rem;
        margin-bottom: 10px;
      }
      .mini-flag{
        max-height:13px;
        border-radius:2px;
      }
      .mia-sum{
      overflow-y:auto;
      height:50%;
      max-height:200px;
      &::-webkit-scrollbar{
       width: 5px;
       background-color: rgba(73, 71, 71, 0.725);
       border-radius:2px;
       }
       &::-webkit-scrollbar-thumb{
       background:$primary-red; 
       border-radius:2px;
      }
    }
    }
  }
  .mia-card:hover>.info-container{
    opacity:1;
  }
  .mia-card:hover>img{
    transform:scale(110%);
    height:100%;
    width:100%;
  }
</style>