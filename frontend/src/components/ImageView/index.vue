<template>
  <div>
    <h1>{{album_title}}</h1>
    <h2>Taken by: {{image.photographer}}</h2>
  </div>
</template>

<script>
export default {
  name: 'ImageView',
  computed: {
    album_title () {
      return this.$store.state.albums[this.$route.params.album_id].title
    },
    image_id () {
      return this.$route.params.image_id
    },
    image () {
      return this.$store.state.albums[this.$route.params.album_id].images[this.$route.params.image_id]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
