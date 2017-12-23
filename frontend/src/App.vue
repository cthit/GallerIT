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

/*
 *   Transition animation for animated list
 *     Use by wrapping list with:
 *       <transition-group name="animated-list" tag="ul"> Some list items </transition-group>  (ul can be replaced with arbitary html tag)
       and tag all list items with the class "animated-list-item" respectively give them a unique id with v-bind:key="SomeId"
 */
.animated-list-item {
  transition: all 1s;
}
.animated-list, .animated-list-leave-to {
  opacity: 0;
}
.animated-list-leave-active {
  position: absolute;
}
</style>

<!-- Scripts specific to this component
  Currently (useful) exposed variables by this script:
-->
<script>
export default {
  name: 'app'
}
</script>
