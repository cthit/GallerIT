<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->

<template>
  <div class="emptySpace">
    <!-- Lazy loading of thumnail image --> 
    <div class="root" v-lazy:background-image="thumbnail_url">
      <div class="banner">
        <div class="name">
          {{title}}
        </div>
      </div>  
    </div>
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
.emptySpace {
  margin-bottom: 30px;
}
.root {
  /* 4:3 aspect ratio*/
  width: 300px;
  height: 225px;
  background-size: contain;
  border-color: #000000;
  border-style: dotted;
}
.banner {
  margin-top: 145px;
  width: 220px;
  height: 40px;
  background-color: #ffb6c1;
}
.name {
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;
}
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
    id: Int id of album
    title: String title of the album
    thumbnail_url: String url to thumbnail for album
    size: Int number of images in the album
    timestamp: Int unix time
-->
<script>
export default {
  name: 'AlbumThumbnail',
  props: [
    'title',
    'thumbnail_url',
    'size',
    'timestamp',
    'id'
  ]
}
</script>
