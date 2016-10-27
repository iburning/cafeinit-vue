<template>
  <router-link v-if="to" v-bind:to="to" tag="div" class="ci-block-header">
    <slot><h3>{{title}}</h3></slot>
  </router-link>

  <div v-else class="ci-block-header">
    <slot><h3>{{title}}</h3></slot>
  </div>
</template>

<script>
export default {
  name: 'ci-block-header',

  props: {
    title: {
      type: String,
      default: 'Block Title'
    },

    to: {
      type: String,
      default: ''
    }
  }
}
</script>
