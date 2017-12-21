<template>
  <div>
    <h1>{{album_title}}</h1>
    <ul>
      <li v-for="(image, key) in images">
        Photographer: {{ image.photographer }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  computed: {
    album_title () {
      return this.$store.state.albums[this.$route.params.album_id].title
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
