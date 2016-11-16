<template>
  <div class="ci-image-picker" v-bind:style="{
      width: width + 'px',
      height: height + 'px'
    }">
    <div class="preview"></div>
    <i class="fa fa-plus ci-icon-plus"></i>
    <input type="file" class="picker" accept="image/jpeg,image/x-png" />
  </div>
</template>

<script>
export default {
  name: 'ci-image-picker',

  props: {
    src: String,

    width: {
      type: [Number, String],
      default: 100
    },

    height: {
      type: [Number, String],
      default: 100
    },

    radius: {
      type: String,
      default: ''
    }
  }
}
</script>
