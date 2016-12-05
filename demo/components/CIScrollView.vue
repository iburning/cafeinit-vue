<template>
  <div v-bind:class="ns + 'scroll-view'" v-bind:style="viewStyle"
    v-on:scroll="onScroll"
    v-on:touchstart="onTouchStart"
    v-on:touchmove="onTouchMove"
    v-on:touchend="onTouchEnd">
    <div v-bind:class="ns + 'scroll-view-content'">
      offset: {{offset.x}}, {{offset.y}}<br />
      size: {{size.width}}, {{size.height}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ci-scroll-view',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    offset: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0
        }
      }
    },

    size: {
      type: Object,
      default: () => {
        return {
          width: '100%',
          height: '100%'
        }
      }
    }
  },

  computed: {
    viewStyle() {
      const width = (typeof this.size.width == 'number') ? (this.size.width + 'px') : this.size.width
      const height = (typeof this.size.height == 'number') ? (this.size.height + 'px') : this.size.height

      return {
        left: this.offset.x + 'px',
        top: this.offset.y + 'px',
        width: width,
        height: height
      }
    }
  },

  methods: {
    onScroll(evt) {
      evt.preventDefault()
    },

    onTouchStart(evt) {
      evt.preventDefault()
    },

    onTouchMove(evt) {
      evt.preventDefault()
    },

    onTouchEnd(evt) {
      evt.preventDefault()
    }
  }
}
</script>

<style lang="less">
.ci-scroll-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  overflow: auto;
  -moz-overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
</style>
