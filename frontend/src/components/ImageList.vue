<template>
  <div>
    <h1>{{$route.params.album_id}}</h1>
    <ul>
      <li v-for="image in images">
        {{ image }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  data () {
    return {
      msg: 'ssss',
      number: 123,
      images: [
        1,
        2,
        3,
        5,
        6
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
