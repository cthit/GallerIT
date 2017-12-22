import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'

// Lazy loading of modules
const AlbumView = () => import('@/components/AlbumView')
const ImageView = () => import('@/components/ImageView')

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
