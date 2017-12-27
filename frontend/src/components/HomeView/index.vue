<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>GallerIT</h1>
    <transition-group name="animated-list" tag="ul">
      <li v-for="album in albums" class="animated-list.item" v-bind:key="album.id">
        <router-link :to="{ name: 'Album', params: { album_id: album.id }}">
          <album-thumbnail v-bind="album"> </album-thumbnail>
        </router-link>
      </li>
    </transition-group>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    albums: Array of albums
      album: album Object of this album
        id: String id of album
        title: String title of the album
        size: Int number of images in this album
        timestamp: Int unix time
        images: Array of images, MAY NOT HAVE BEEN POPULATED!!
          image: image Object
            id: String id of image
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
      return this.$store.getters.getAlbums.sort((a, b) => b.timestamp - a.timestamp)
    }
  }
}
</script>
