<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>
      GallerIT
      <icon name="picture-o" scale="2" spin></icon>
    </h1>
    <div class="loading" v-if="showLoading">Loading...</div>
    <div class="error" v-if="showError">{{lastError}}</div>
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
        id: Int id of album
        title: String title of the album
        size: Int number of images in this album
        timestamp: Int unix time
        images: Array of images, MAY NOT HAVE BEEN POPULATED!! Unsorted
          image: image Object
            id: Int id of image
            picture_url: String url to full size image
            thumbnail_url: String url to thumnail of image
            photographer: String name
            timestamp: Int unix time
-->
<script>
import AlbumThumbnail from '@/components/HomeView/AlbumThumbnail'

export default {
  name: 'HomeView',
  components: {
    AlbumThumbnail
  },
  data () {
    return {
      loading: false,
      lastError: null
    }
  },
  computed: {
    albums () {
      return this.$store.getters.getAlbums.sort((a, b) => b.timestamp - a.timestamp)
    },
    showLoading () {
      return this.loading && this.albums.length === 0
    },
    showError () {
      return this.lastError != null
    }
  },
  methods: {
    getData () {
      if (this.$route.name === 'Home') {
        this.loading = true
        this.$store.dispatch('getAlbumList').then((value) => {
          // Do on sucess
          this.lastError = null
          this.loading = false
        }).catch((reason) => {
          // Do on fail
          this.lastError = reason.message
          setTimeout(this.getData(), 5000)
        })
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    '$route': 'getData'
  }
}
</script>
