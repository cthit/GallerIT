<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>GallerIT</h1>
    <ul>
      <li v-for="(album, key) in albums">
        <router-link :to="{ name: 'Album', params: { album_id: key }}">
          <album-thumbnail v-bind="album"> </album-thumbnail>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    albums: Array of albums indexed with id
      id: Int id of image
        album: album Object of this album
          title: String title of the album
          size: Int number of images in this album
          timestamp: Int unix time
          images: Array of images indexed with id, MAY NOT HAVE BEEN POPULATED!!
            id: Int id of image
              image: image Object
                picture_url: String url to full size image
                thumbnail_url: String url to thumnail of image
                photographer: String name
                editor: String name
                timestamp: Int unix time
-->
<script>
import AlbumThumbnail from '@/components/HomeView/AlbumThumbnail'

export default {
  name: 'HomeView',
  components: {
    AlbumThumbnail
  },
  computed: {
    albums () {
      return this.$store.state.albums
    }
  }
}
</script>
