<template>
  <div class="ci-block-hd">
    <slot><h3>{{title}}</h3></slot>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Block Title'
    }
  }
}
</script>
