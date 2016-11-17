<template>
  <div v-bind:class="{
      'ci-slide-view-item': true,
      'ci-actived': isActived
    }"
    v-bind:style="wiewStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ci-slide-view-item',

  props: {
    // width: {
    //   type: Number,
    //   default: 100
    // },
    //
    // height: {
    //   type: Number,
    //   default: 100
    // },

    isActived: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      width: 100,
      height: 100
    }
  },

  computed: {
    wiewStyle() {
      return {
        overflow: 'hidden',
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  }
}
</script>
