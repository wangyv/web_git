import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import MovieDetail from '@/components/movie/MovieDetail'
import Photo from '@/components/photo/Photo'
import MusicAlbums from '@/components/music/MusicAlbums'
import MusicList from '@/components/music/MusicList'
import Mask from '@/components/photo/Mask'
import Mask1 from '@/components/photo/Mask1'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
        path: '/',
        name: 'movie',
        component: Movie,
      },{
        path: '/music',
        name: 'music',
        component: Music,
        beforeEnter(to,from,next){
          from.name === null? next('/') : next();
        }
      },{
        path: '/book',
        name: 'book',
        component: Book,
        beforeEnter(to,from,next){
          from.name === null? next('/') : next();
        }
      },{
        path: '/photo',
        name: 'photo',
        component: Photo,
        beforeEnter(to,from,next){
          from.name === null? next('/') : next();
        }
      },{
        path: '/moviedetail/:movieId',
        name: 'movieDetail',
        component: MovieDetail,
        beforeEnter(to,from,next){
          from.name === null? next('/') : next();
        }
      },{
        path: '/musiclist/:musicId',
        component: MusicAlbums,
        beforeEnter(to,from,next){
          from.name === null? next('/') : next();
        }
      },{
        path: '/mask/:index',
        component: Mask,
        beforeEnter(to,from,next){
          from.name === null? next('/') : next();
        }
      }]
})
