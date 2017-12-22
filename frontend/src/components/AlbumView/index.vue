<template>
  <div>
    <h1>{{album_title}}</h1>
    <ul>
      <li v-for="(image, key) in images">
        <router-link :to="{ name: 'Image', params: { album_id: album_id, image_id: key }}">
          Photographer: {{ image.photographer }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AlbumView',
  computed: {
    album_title () {
      return this.$store.state.albums[this.$route.params.album_id].title
    },
    album_id () {
      return this.$route.params.album_id
    },
    images () {
      return this.$store.state.albums[this.$route.params.album_id].images
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
