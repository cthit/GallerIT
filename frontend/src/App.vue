<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  provide: {
    global: 3
  }
}
</script>

<style lang="scss">
</style>
