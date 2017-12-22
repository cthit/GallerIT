import Vue from 'vue'
import Router from 'vue-router'
import AlbumView from '@/components/AlbumView'
import ImageView from '@/components/ImageView'
import HomeView from '@/components/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/album',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/album/:album_id',
      name: 'Album',
      component: AlbumView
    },
    {
      path: '/album/:album_id/image/:image_id',
      name: 'Image',
      component: ImageView
    },
    {
      path: '/',
      redirect: '/album'
    }
  ]
})
