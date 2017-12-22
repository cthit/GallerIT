<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    {{title}}
  </div>
</template>

<!-- sass or css styling specific to this component -->
<style lang="scss" scoped>
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
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
    'timestamp'
  ]
}
</script>
