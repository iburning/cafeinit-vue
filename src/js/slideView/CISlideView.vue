<template>
  <div class="ci-slide-view" v-bind:style="wiewStyle">
    <div ref="content"
      class="ci-slide-view-content"
      v-bind:style="contentStyle"
      v-on:touchstart="_slideStart"
      v-on:touchmove="_slideMove"
      v-on:touchend="_slideEnd">
      <slot></slot>
    </div>
    <span class="ci-slide-view-page">{{currentIndex}}/{{itemCount}}</span>
    <a class="ci-slide-view-prev" href="javascript:;" v-on:click="move(-1)">&lt;</a>
    <a class="ci-slide-view-next" href="javascript:;" v-on:click="move(1)">&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'ci-slide-view',

  props: {
    direction: {
      type: String,
      default: 'horizontal'   // horizontal / vertical
    },

    delay: {        // 播放停留时间
      type: Number,
      default: 2000
    },

    duration: {     // 动画时间
      type: Number,
      default: 500
    },

    index: {
      type: Number,
      default: 0
    },

    isAutoplay: {
      type: Boolean,
      default: true
    },

    itemWidth: {
      type: Number,
      default: 100
    },

    itemHeight: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      currentIndex: this.index,
      itemCount: 0,

      position: {
        startX: 0,
        startY: 0,
        x: 0,
        y: 0
      },

      touchObject: {
        startX: 0,
        startY: 0,
        x: 0,
        x: 0
      }
    }
  },

  computed: {
    wiewStyle() {
      return {
        overflow: 'hidden',
        width: this.itemWidth + 'px',
        height: this.itemHeight + 'px'
      }
    },

    contentStyle() {
      let style = {
        width: this.itemWidth * this.itemCount + 'px',
        height: this.itemHeight + 'px'
      }

      if (this.direction == 'vertical') {
        style = {
          width: this.itemWidth + 'px',
          height: this.itemHeight * this.itemCount + 'px'
        }
      }

      return style
    }
  },

  watch: {
    contentStyle(val, oldVal) {
      console.log('CISlideView.contentStyle', val, oldVal)
    }
  },

  mounted() {
    console.log('CISlideView.mounted', this)
    this.$content = this.$refs.content
    this.$items = this.$children
    for (let i = 0; i < this.$items.length; i++) {
      this.$items[i].width = this.itemWidth
      this.$items[i].height = this.itemHeight
    }
    this.itemCount = this.$items.length
    this._setTransition(this.duration)
    this.moveTo(this.currentIndex)

    if (this.isAutoplay) {
      this.play()
    }
  },

  methods: {
    move(step, done) {
      step = (step % this.itemCount);
      let lastIndex = this.currentIndex
      let index = this.currentIndex + step

      if (index < 0) {
        index = this.itemCount + index
      }
      if (index > (this.itemCount - 1)) {
        index = index - this.itemCount
      }
      this.currentIndex = index;

      for (let i; i < this.itemCount; i++) {
        // this.$items[i].actived = false
      }
      // this.$items[index].actived = true

      let x = 0
      let y = 0
      if (this.direction == 'horizontal') {
        x = -this.itemWidth * index
      }
      else if (this.direction == 'vertical') {
        y = -this.itemHeight * index
      }
      this._setTransform(x, y)

      if (typeof done === 'function') {
        done()
      }

      console.log('from %s move %s step(s) to %s', lastIndex, step, index)
      this.$emit('did-move', index, lastIndex)
    },

    moveTo(target) {
      console.log('moveTo', target, this.currentIndex)
      this.move(target - this.currentIndex)
    },

    play() {
      let that = this

      window.setTimeout(function () {
        that.move(1, function () {
          that.play()
        })
      }, this.delay)
    },

    _setTransform(x, y) {
      x = parseInt(x) || 0
      y = parseInt(y) || 0

      this.position.x = x
      this.position.y = y

      let pos = [x + 'px', y + 'px', '0px']
      let transform = 'translate3d(' + pos.join(',') + ')'
      this.$content.style.webkitTransform = transform
      this.$content.style.transform = transform

      if (typeof done == 'function') {
        done()
      }
    },

    _setTransition(duration) {
      let transition = (!duration || duration == 'none') ? 'none' : duration + 'ms'
      this.$content.style.webkitTransition = transition
      this.$content.style.transition = transition
    },

    _slideStart(evt) {
      this._setTransition()

      let currentX = (evt.touches) ? evt.touches[0].pageX : evt.clientX
      let currentY = (evt.touches) ? evt.touches[0].pageY : evt.clientY

      this.touchObject = {
        startX: currentX,
        startY: currentY,
        x: currentX,
        y: currentY
      }

      this.position.startX = this.position.x
      this.position.startY = this.position.y
    },

    _slideMove(evt) {
      let currentX = (evt.touches) ? evt.touches[0].pageX : evt.clientX
      let currentY = (evt.touches) ? evt.touches[0].pageY : evt.clientY

      this.touchObject.x = currentX
      this.touchObject.y = currentY

      if (this.direction == 'horizontal') {
        let dX = currentX - this.touchObject.startX
        this._setTransform(this.position.x + dX, 0)
      }
      else if (this.direction == 'vertical') {
        let dY = currentY - this.touchObject.startY
        this._setTransform(0, this.position.y + dY)
      }
    },

    _slideEnd(evt) {
      this._setTransition(this.duration)
      console.log('CISlideView._slideEnd', this.touchObject)

      // let currentX = this.touchObject.x
      // let currentY = this.touchObject.y

      if (this.direction == 'horizontal') {
        let dX = this.position.x - this.position.startX
        if (dX > 0) {     // 向右滑，向前翻1页
          this.move(-1)
        }
        else {      // 向左滑，向后翻1页
          this.move(1)
        }
      }
      else if (this.direction == 'vertical') {
        this._setTransform(0, this.position.y + dY)
      }
    }
  }
}
</script>
