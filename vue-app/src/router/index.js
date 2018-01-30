import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/common/index'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/movie',
        name: 'movie',
        component: Movie,
      },{
        path: 'music',
        name: 'music',
        component: Music
      },{
        path: 'book',
        name: 'book',
        component: Book
      },{
        path: 'photo',
        name: 'photo',
        component: Photo
      }]
    },
    // {
    //   path: '/music',
    //   name: 'music',
    //   component: Music
    // },
    // {
    //   path: '/book',
    //   name: 'book',
    //   component: Book
    // },{
    //   path: '/photo',
    //   name: 'photo',
    //   component: Photo
    // }
  ]
})
