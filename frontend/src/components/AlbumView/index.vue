<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <h1>{{album.title}}</h1>
    <div class="loading" v-if="showLoading">Loading...</div>
    <div class="error" v-if="showError">{{lastError}}</div>
    <transition-group class="photo-grid" name="animated-list" tag="ul">
      <li v-for="image in sortedImages" class="animated-list-item photo-wrapper" v-bind:key="image.id">
        <div class="content-wrapper">
          <router-link :to="{ name: 'Image', params: { album_id: album.id, image_id: image.id }}">
            <!-- Lazy loading of thumnail image -->
            <div class="image-wrapper">
              <img v-lazy="image.thumbnail_url"/>
            </div>
            <div class="photo-description-wrapper">
              <div class="photo-description">
                <p class="photo-photographer">By: {{ image.photographer }}</p>
                <p class="photo-date">{{ image.timestamp }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
.photo-grid {
  height: 100%;
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  height: 225px;
  float: left;
}

body {
  background-color: #f7f7f7;
}

.photo-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.photo-description-wrapper {
  width: 100%;
  height: 45px;
  float: left;
}

.photo-description {
  padding: 10px;
  font-size: 18px;
  color: black;
}

.photo-photographer {
  float: left;
  font-family: Roboto;
  font-weight: 700;
}

.photo-date {
  float: right;
  color: #757575;
}

.photo-wrapper {
  display: flex;
  width: 300px;
  float: left;
  list-style-type: none;
  padding: 35px;
}

.content-wrapper {
  width: 100%;
  height: 265px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.5);
  border-radius: 0 0 8px 8px;
  -webkit-transition: transform 0.1s linear;
}

.content-wrapper:hover {
  transform: scale(1.5);
  animation: cat-click-animation 0.2s 0s 1 linear;
}

.content-wrapper:active {
}

@keyframes cat-click-animation {
  0% { transform: rotate(0deg) scale(1.5); }
  50% { transform: rotate(30deg) scale(1.5); }
  100% { transform: rotate(0deg) scale(1.5); }
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
}
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    album: album Object of this album
      id: Int id of this album
      title: String title of the album
      size: Int number of images in this album
      timestamp: Int unix time
      images: Array of images (UNSORTED)
        image: image Object
          id: Int id of image
          picture_url: String url to full size image
          thumbnail_url: String url to thumnail of image
          photographer: String name
          timestamp: Int unix time
    sortedImages: a sorted list of images
      (see above for properties)
-->
<script>
export default {
  name: 'AlbumView',
  data () {
    return {
      loading: false,
      lastError: null
    }
  },
  computed: {
    album () {
      return this.$store.getters.getAlbum(this.$route.params.album_id)
    },
    sortedImages () {
      return this.$store.getters.getImages(this.$route.params.album_id).sort((a, b) => b.timestamp - a.timestamp)
    },
    showLoading () {
      return this.loading && this.album.images.length === 0
    },
    showError () {
      return this.lastError != null
    }
  },
  methods: {
    getData () {
      if (this.$route.name === 'Album') {
        this.loading = true
        this.$store.dispatch('updateAlbum', this.$route.params.album_id).then((value) => {
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
