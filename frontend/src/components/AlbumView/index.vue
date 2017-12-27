<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>{{album.title}}</h1>
    <transition-group name="animated-list" tag="ul">
      <li v-for="image in sortedImages" class="animated-list-item" v-bind:key="image.id">
        <router-link :to="{ name: 'Image', params: { album_id: album.id, image_id: image.id }}">
          <!-- Lazy loading of thumnail image -->
          <img v-lazy="image.thumbnail_url"/>
          Photographer: {{ image.photographer }}
        </router-link>
      </li>
    </transition-group>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
img {
  width: 300px;
  height: 225px;
}
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    album: album Object of this album
      id: String id of this album
      title: String title of the album
      size: Int number of images in this album
      timestamp: Int unix time
      images: Array of images (UNSORTED)
        image: image Object
          id: String id of image
          picture_url: String url to full size image
          thumbnail_url: String url to thumnail of image
          photographer: String name
          editor: String name
          timestamp: Int unix time
    sortedImages: a sorted list of images
      (see above for properties)
-->
<script>
export default {
  name: 'AlbumView',
  computed: {
    album () {
      return this.$store.getters.getAlbum(this.$route.params.album_id)
    },
    sortedImages () {
      return this.$store.getters.getImages(this.$route.params.album_id).sort((a, b) => b.timestamp - a.timestamp)
    }
  }
}
</script>
