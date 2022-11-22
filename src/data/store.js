import {reactive} from 'vue'

export const store = reactive ({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  trendUrl:'https://api.themoviedb.org/3/trending/',
  apiKey:'830f801987e075f53ffa8a84c8fde8d7',
  imgUrl:'https://image.tmdb.org/t/p/w342',
  movie:[],
  tv:[],
  //ricerca puntuale dell'elemento = query
  elementToSearch : '',
  //ricerca filtrata serieTV / Film
  typeOf:'',
  isLoaded : false,
})