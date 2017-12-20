<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'AlbumThumbnail',
  data () {
    return {
      name_old: 'A funny album'
    }
  },
  props: ['id', 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
