<template>
  <div class="ci-block-header">
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
    }
  }
}
</script>
