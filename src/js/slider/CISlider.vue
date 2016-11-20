<template>
  <div class="ci-slider"
    v-bind:style="{ width: width + 'px' }"
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
    width: {          // 组件宽度
      type: Number,
      default: 200
    },

    step: {
      type: Number,
      default: 0
    },

    value: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      currentValue: this.value,
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
      if (val >= this.min && val <= this.max) {
        this.currentValue = val
      }
    },

    currentValue(val, oldVal) {
      if (val != oldVal) {
        let r = val / (this.max - this.min)
        let x = this.distance * r
        this.setBarLightWidth(r)
        this.setHandleTransform(x)
        this.$emit('input', val)
      }
    }
  },

  mounted() {
    this.$handle = this.$refs.handle
    this.$barLight = this.$refs['bar-light']

    let r = this.value / (this.max - this.min)
    let x = this.distance * r
    this.setBarLightWidth(r)
    this.setHandleTransform(x)
  },

  methods: {
    onTouchStart(evt) {
      evt.preventDefault()
      // console.log('CISlider.onTouchStart', evt)
      this.touchObject.startX = evt.touches[0].pageX
      this.touchObject.startY = evt.touches[0].pageY

      let x = this.touchObject.startX - this.handle.width
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
      // console.log('CISlider.onTouchEnd', this.currentValue)
      // alert(typeof this.step + this.step)
      if (this.step > 0) {
        // alert(Math.round(this.currentValue / this.step))
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
