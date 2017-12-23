<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>{{album_title}}</h1>
    <!-- Lazy loading of image -->
    <img v-lazy="image.picture_url"/>
    <h2>Taken by: {{image.photographer}}</h2>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    album_title: String title of the album containing this picture
    image: image Object of this image
      id: String id of this image
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
      return this.$store.getters.getAlbum(this.$route.params.album_id).title
    },
    image () {
      return this.$store.getters.getImage(this.$route.params.album_id, this.$route.params.image_id)
    }
  }
}
</script>
