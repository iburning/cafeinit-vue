<template>
  <div class="ci-slider">
    <div v-if="isShowValue" class="ci-slider-value">{{value}}</div>
    <div ref="bar" class="ci-slider-bar"
      v-bind:style="{ width: width + 'px' }"
      v-on:touchstart="onTouchStart"
      v-on:touchmove="onTouchMove"
      v-on:touchend="onTouchEnd">
      <div ref="bar-light" class="ci-slider-bar-light"></div>
      <div ref="handle" class="ci-slider-handle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ci-slider',

  props: {
    width: {          // 组件宽度
      type: Number,
      default: 200
    },

    step: {
      type: Number,
      default: 0
    },

    value: {
      type: [Number, String],
      default: 0
    },

    isShowValue: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      currentValue: parseInt(this.value) || 0,
      max: 100,
      min: 0,

      handle: {
        width: 30,
        height: 30,
        x: 0,
        y: 0
      },

      touchObject: {
        startX: 0,
        startY: 0
      },

      origin: {
        x: 0,
        y: 0
      }
    }
  },

  computed: {
    distance() {      // handle可移动的距离
      return this.width - this.handle.width
    }
  },

  watch: {
    value(val) {
      // console.log('watch value', val)
      val = parseInt(val) || 0
      val = (val < this.min) ? this.min : val
      val = (val > this.max) ? this.max : val
      let r = val / (this.max - this.min)
      let x = this.distance * r
      this.setBarLightWidth(r)
      this.setHandleTransform(x)
    },

    currentValue(val, oldVal) {
      // console.log('watch currentValue', val)
      let r = val / (this.max - this.min)
      let x = this.distance * r
      this.setBarLightWidth(r)
      this.setHandleTransform(x)
      this.$emit('input', parseInt(val))
    }
  },

  mounted() {
    this.$handle = this.$refs.handle
    this.$bar = this.$refs.bar
    this.$barLight = this.$refs['bar-light']
    this.origin = {
      x: this.$bar.offsetLeft,
      y: this.$bar.offsetHeight
    }

    let value = parseInt(this.currentValue) || 0
    value = (value < this.min) ? this.min : value
    value = (value > this.max) ? this.max : value
    this.currentValue = value

    let r = this.currentValue / (this.max - this.min)
    let x = this.distance * r
    this.setBarLightWidth(r)
    this.setHandleTransform(x)
  },

  methods: {
    onTouchStart(evt) {
      evt.preventDefault()
      // console.log('CISlider.onTouchStart', evt.touches[0])
      this.touchObject.startX = evt.touches[0].pageX
      this.touchObject.startY = evt.touches[0].pageY

      let x = this.touchObject.startX - this.origin.x - this.handle.width / 2
      x = (x < 0) ? 0 : x
      x = (x > this.distance) ? this.distance : x
      this.handle.x = x

      let r = x / this.distance
      this.currentValue = (this.max - this.min) * r
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
    },

    onTouchEnd(evt) {
      // console.log('CISlider.onTouchEnd', evt)
      if (this.step > 0) {
        this.currentValue = Math.round(this.currentValue / this.step) * this.step
      }
    },

    setHandleTransform(x, y) {
      x = parseInt(x) || 0
      y = parseInt(y) || 0

      let pos = [x + 'px', y + 'px', '0px']
      let transform = 'translate3d(' + pos.join(',') + ')'
      this.$handle.style.webkitTransform = transform
      this.$handle.style.transform = transform
    },

    setBarLightWidth(r) {
      this.$barLight.style.width = r * 100 + '%'
    }
  }
}
</script>
