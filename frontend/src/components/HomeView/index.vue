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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
