<!-- HTML for this component
Note that there can only be one root element inside the "template" tags
Variables can be used as {{ variable }}
For more Vue template syntax see https://vuejs.org/v2/guide/syntax.html
 -->
<template>
  <div>
    <router-view/>
  </div>
</template>

<!-- sass or css global styling for the app -->
<style lang="scss">
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
-->
<script>
export default {
  name: 'app'
}
</script>
