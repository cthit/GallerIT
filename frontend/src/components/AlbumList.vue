<template>
  <div>
    <h1>GallerIT</h1>
    <ul>
      <li v-for="album in albums">
        <router-link :to="{ name: 'Album', params: { album_id: album }}">
          {{album}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
  data () {
    return {
      albums: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
