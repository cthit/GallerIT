<template>
  <div>
    <h1>GallerIT</h1>
    <ul>
      <li v-for="album in albums">
        <router-link :to="{ name: 'Album', params: { album_id: album.id }}">
          <album-thumbnail v-bind="album"> </album-thumbnail>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AlbumThumbnail from '@/components/AlbumThumbnail'

export default {
  name: 'AlbumList',
  data () {
    return {
      albums: [
        {
          id: 1,
          name: 'roligt namn'
        },
        {
          id: 2,
          name: 'himmelskt namn'
        },
        {
          id: 3,
          name: 'tråkigt namn'
        },
        {
          id: 4,
          name: 'fasansfullt namn'
        }
      ]
    }
  },
  components: {
    AlbumThumbnail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
