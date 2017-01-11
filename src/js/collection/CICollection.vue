<template>
  <ul v-bind:class="{
      'ci-collection': true,
      'ci-collection-flex': isFlex,
      'ci-collection-float': !isFlex
    }">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ci-collection',

  props: {
    isFlex: {
      type: Boolean,
      default: false
    }
  }
}
</script>
