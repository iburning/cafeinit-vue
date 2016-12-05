<template>
  <div v-bind:class="ns + 'scroll-view'" v-bind:style="viewStyle"
    v-on:touchstart="onTouchStart"
    v-on:touchmove="onTouchMove"
    v-on:touchend="onTouchEnd"
    v-on:scroll="onScroll">
    <div ref="content" v-bind:class="ns + 'scroll-view-content'">
      <slot></slot>
    </div>
    <ul v-bind:class="ns + 'scroll-view-debug'">
      <li>event: {{eventName}}</li>
      <li>x: {{contentPostion.x}}, y: {{contentPostion.y}}</li>
    </ul>
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

  data() {
    return {
      eventName: name,
      contentPostion: {
        startX: 0,
        startY: 0,
        x: 0,
        y: 0
      },

      contentSize: {
        width: 0,
        height: 0
      },

      touchInfo: {
        timeStamp: 0,
        startX: 0,
        startY: 0,
        x: 0,
        y: 0
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

  mounted() {

  },

  methods: {
    onTouchStart(evt) {

    },

    onTouchMove(evt) {

    },

    onTouchEnd(evt) {

    },

    onScroll(evt) {
      
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

.ci-scroll-view-content {
  position: relative;
  left: 0;
  top: 0;
}

.ci-scroll-view-debug {
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 50px;
  padding: 10px;
  margin: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
</style>
