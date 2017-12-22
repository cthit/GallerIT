<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>{{album.title}}</h1>
    <ul>
      <li v-for="(image, key) in album.images">
        <router-link :to="{ name: 'Image', params: { album_id: album_id, image_id: key }}">
          Photographer: {{ image.photographer }}
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
    image_id: Int id of this album
    album: album Object of this album
      title: String title of the album
      size: Int number of images in this album
      timestamp: Int unix time
      images: Array of images indexed with id
        id: Int id of image
          image: image Object
            picture_url: String url to full size image
            thumbnail_url: String url to thumnail of image
            photographer: String name
            editor: String name
            timestamp: Int unix time
-->
<script>
export default {
  name: 'AlbumView',
  computed: {
    album () {
      return this.$store.state.albums[this.$route.params.album_id]
    },
    album_id () {
      return this.$route.params.album_id
    }
  }
}
</script>
