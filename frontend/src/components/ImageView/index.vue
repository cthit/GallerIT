<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>{{album_title}}</h1>
    <h2>Taken by: {{image.photographer}}</h2>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    album_title: String title of the album containing this picture
    image_id: Int id of this image
    image: image Object of this image
      picture_url: String url to full size image
      photographer: String name
      editor: String name
      timestamp: Int unix time
-->
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
