import Vue from 'vue'
import Router from 'vue-router'
import ImageList from '@/components/ImageList'
import ImageMeta from '@/components/ImageMeta'
import AlbumList from '@/components/AlbumList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/album',
      name: 'Home',
      component: AlbumList
    },
    {
      path: '/album/:album_id',
      name: 'Album',
      component: ImageList
    },
    {
      path: '/album/:album_id/image/:image_id',
      name: 'Image',
      component: ImageMeta
    },
    {
      path: '/',
      redirect: '/album'
    }
  ]
})
