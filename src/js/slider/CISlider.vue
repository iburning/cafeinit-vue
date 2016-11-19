<template>
  <div class="ci-slider"
    v-bind:style="{
      width: width + 'px'
    }"
    v-on:touchstart="onTouchStart"
    v-on:touchmove="onTouchMove"
    v-on:touchend="onTouchEnd">
    <div ref="bar-light" class="ci-slider-bar-light"></div>
    <div ref="handle" class="ci-slider-handle"></div>
  </div>
</template>

<script>
export default {
  name: 'ci-slider',

  props: {
    max: {
      type: Number,
      default: 100
    },

    min: {
      type: Number,
      default: 0
    },

    width: {
      type: Number,
      default: 200
    },

    step: {
      type: Number,
      default: 1
    },

    value: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      currentValue: this.value,

      touchObject: {
        startX: 0,
        startY: 0
      },

      startX: 0,
      endX: 0,

      handle: {
        width: 30,
        height: 30,
        x: 0,
        y: 0
      }
    }
  },

  computed: {
    distance() {
      return this.width - this.handle.width
    }
  },

  watch: {
    currentValue(val, oldVal) {
      if (val != oldVal) {
        this.$emit('input', val)
      }
    }
  },

  mounted() {
    this.$handle = this.$refs.handle
    this.$barLight = this.$refs['bar-light']

    let r = this.value / (this.max - this.min)
    let x = this.distance * r
    this.setBarLight(r)
    this.setTransform(x)
  },

  methods: {
    onTouchStart(evt) {
      // evt.preventDefault()
      // console.log('CISlider.onTouchStart', evt)
      this.touchObject.startX = evt.touches[0].pageX
      this.touchObject.startY = evt.touches[0].pageY

      let x = this.touchObject.startX - this.handle.width
      x = (x < 0) ? 0 : x
      x = (x > this.distance) ? this.distance : x
      this.handle.x = x

      let r = x / this.distance
      this.currentValue = (this.max - this.min) * r
      this.setBarLight(r)
      this.setTransform(x)
    },

    onTouchMove(evt) {
      evt.preventDefault()
      // console.log('CISlider.onTouchStart', evt)
      let dX = evt.touches[0].pageX - this.touchObject.startX
      let x = this.handle.x + dX
      x = (x < 0) ? 0 : x
      x = (x > this.distance) ? this.distance : x

      let r = x / this.distance
      this.currentValue = (this.max - this.min) * r
      this.setBarLight(r)
      this.setTransform(x)
    },

    onTouchEnd(evt) {
      // console.log('CISlider.onTouchEnd', evt)
    },

    setTransform(x, y) {
      x = parseInt(x) || 0
      y = parseInt(y) || 0

      let pos = [x + 'px', y + 'px', '0px']
      let transform = 'translate3d(' + pos.join(',') + ')'
      this.$handle.style.webkitTransform = transform
      this.$handle.style.transform = transform
    },

    setBarLight(r) {
      this.$barLight.style.width = r * 100 + '%'
    }
  }
}
</script>

<style lang="less">
.ci-slider {
  position: relative;
  min-width: 200px;
  height: 30px;

  &:before,
  & > .ci-slider-bar-light {
    z-index: 1;
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    height: 4px;
    margin-top: -2px;
    border-radius: 2px;
  }

  &:before {
    background: #ddd;
    width: 100%;
  }

  & > .ci-slider-bar-light {
    background: #52b888;
    width: 0;
  }
}

.ci-slider-handle {
  z-index: 10;
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  border: solid 1px #ddd;
  border-radius: 50%;
  background-color: #fff;
}
</style>
