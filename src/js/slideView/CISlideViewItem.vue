<template>
  <div v-bind:class="{
      'ci-slide-view-item': true,
      'ci-actived': isActived
    }"
    v-bind:style="wiewStyle"
    v-bind:index="index">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ci-slide-view-item',

  props: {
    index: {
      type: Number,
      default: 0
    },



    width: {
      type: Number,
      default: 100
    },

    height: {
      type: Number,
      default: 100
    },

    isActived: {
      type: Boolean,
      default: false
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
