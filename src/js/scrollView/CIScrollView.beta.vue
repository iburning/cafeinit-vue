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
    },

    scrollRange() {
      return {
        width: this.size.width - this.contentSize.width,
        height: this.size.height - this.contentSize.height
      }
    }
  },

  mounted() {
    this.$content = this.$refs.content
    window.$content = this.$content

    this.contentSize.width = this.$content.offsetWidth
    this.contentSize.height = this.$content.offsetHeight

    console.log('mounted', this.size, this.contentSize, this.scrollRange)
  },

  methods: {
    onTouchStart(evt) {
      console.log('onTouchStart', evt)
      this.eventName = 'touchstar'
      const touch = evt.touches[0]
      this.touchInfo.timeStamp = evt.timeStamp
      this.touchInfo.startX = touch.pageX
      this.touchInfo.startY = touch.pageY
    },

    onTouchMove(evt) {
      // console.log('onTouchMove', evt)
      this.eventName = 'move'
      evt.preventDefault()

      if (this.timer) {
        clearTimeout(this.timer)
      }

      const touch = evt.touches[0]
      this.touchInfo.x = touch.pageX
      this.touchInfo.y = touch.pageY

      const dX = this.touchInfo.x - this.touchInfo.startX
      const dY = this.touchInfo.y - this.touchInfo.startY
      // const x = this.contentPostion.startX + dX
      let y = this.contentPostion.startY + dY
      y = (y < this.scrollRange.height) ? this.scrollRange.height : y
      y = (y > 0) ? 0 : y
      this.contentPostion.y = y

      this.setContentTransform(0, y)
    },

    onTouchEnd(evt) {
      console.log('onTouchEnd', evt)
      this.eventName = 'touchend'
      const dX = this.touchInfo.x - this.touchInfo.startX
      const dY = this.touchInfo.y - this.touchInfo.startY

      let y = this.contentPostion.startY + dY
      y = (y < this.scrollRange.height) ? this.scrollRange.height : y
      y = (y > 0) ? 0 : y
      this.contentPostion.startY = y

      let speed = dY / (evt.timeStamp - this.touchInfo.timeStamp) * 100
      console.log(dY, evt.timeStamp - this.touchInfo.timeStamp, speed)
      this.inertiaMove(speed)
    },

    onScroll(evt) {
      this.eventName = 'scroll'
    },

    setContentTransform(x, y) {
      x = parseInt(x) || 0
      y = parseInt(y) || 0

      let pos = [x + 'px', y + 'px', '0px']
      let transform = 'translate3d(' + pos.join(',') + ')'
      this.$content.style.webkitTransform = transform
      this.$content.style.transform = transform
    },

    inertiaMove(speed) {
      const that = this

      if (Math.abs(speed) < 1 && this.timer) {
        clearTimeout(this.timer)
      }

      let x = this.contentPostion.x
      let y = this.contentPostion.y += speed

      y = (y < this.scrollRange.height) ? this.scrollRange.height : y
      y = (y > 0) ? 0 : y
      this.contentPostion.startY = y

      this.timer = setTimeout(function () {
        that.setContentTransform(x, y)
        speed *= 0.9
        that.inertiaMove(speed)
      }, 30)
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
