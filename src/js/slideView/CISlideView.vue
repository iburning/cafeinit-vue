<template>
  <div class="ci-slide-view" v-bind:style="wiewStyle">
    <div ref="content"
      class="ci-slide-view-content"
      v-bind:style="contentStyle"
      v-on:mousedown="_slideStart"
      v-on:mousemove="_slideMove"
      v-on:mouseup="_slideEnd"
      v-on:touchstart="_slideStart"
      v-on:touchmove="_slideMove"
      v-on:touchend="_slideEnd">
      <slot></slot>
    </div>
    <a v-if="isShowButtons" class="ci-slide-view-prev" href="javascript:;" v-on:click="onClickButton(-1)">&lt;</a>
    <a v-if="isShowButtons" class="ci-slide-view-next" href="javascript:;" v-on:click="onClickButton(1)">&gt;</a>
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
      default: false
    },

    isLoop: {
      type: Boolean,
      default: false
    },

    isShowButtons: {
      type: Boolean,
      default: false
    },

    value: {
      type: Array,
      default: function () {
        return []
      }
    },

    itemCount: {
      type: Number,
      default: 0
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
      items: this.value,
      isMoving: false,

      position: {
        x: 0,
        y: 0
      },

      touchObject: {
        startX: 0,
        startY: 0,
        x: 0,
        x: 0
      },

      isDragging: false,      // 是否在滑动
      isTouching: false       // 是否在触屏
    }
  },

  computed: {
    _itemCount() {
      if (this.value && this.value.length) {
        return this.value.length
      }
      else {
        return this.isLoop ? (this.itemCount + 2) : this.itemCount
      }
    },

    wiewStyle() {
      return {
        overflow: 'hidden',
        width: this.itemWidth + 'px',
        height: this.itemHeight + 'px'
      }
    },

    contentStyle() {
      let style = {
        width: this.itemWidth * this._itemCount + 'px',
        height: this.itemHeight + 'px'
      }

      if (this.direction == 'vertical') {
        style = {
          width: this.itemWidth + 'px',
          height: this.itemHeight * this._itemCount + 'px'
        }
      }

      return style
    }
  },

  mounted() {
    console.log('CISlideView.mounted', this.items.length, this)
    const that = this;

    if (this.isLoop) {
      if (this.items.length) {
        let firstItem = this.items[0]
        let lastItem = this.items[this.items.length - 1]
        this.items.unshift(lastItem)
        this.items.push(firstItem)
        this.$emit('change', this.items)
      }
    }

    this.$content = this.$refs.content


    this.$content.addEventListener('transitionend', function (evt) {
      // console.log('transitionend', evt)
      that.isMoving = false

      if (that.isLoop) {
        if (that.currentIndex == 0) {
          that.moveTo(that._itemCount - 2, 0)
        }
        else if (that.currentIndex == that._itemCount - 1) {
          that.moveTo(1, 0)
        }
      }
    })


    if (this.isLoop) {
      this.moveTo(this.currentIndex + 1, 0)
    }
    else {
      this.moveTo(this.currentIndex, 0)
    }

    if (this.isAutoplay) {
      this.play()
    }
  },

  methods: {
    move(step, duration, done) {
      step = (step % this._itemCount)
      let lastIndex = this.currentIndex
      let index = this.currentIndex + step

      if (index < 0) {
        index = this._itemCount + index
      }
      if (index > (this._itemCount - 1)) {
        index = index - this._itemCount
      }
      this.currentIndex = index;

      let x = 0
      let y = 0
      if (this.direction == 'horizontal') {
        x = -this.itemWidth * index
        this.position.x = x
      }
      else if (this.direction == 'vertical') {
        y = -this.itemHeight * index
        this.position.y = y
      }

      // console.log('move %s step(s) from %s to %s, duration=%s', step, lastIndex, index, duration)
      this._setTransition(duration)
      this._setTransform(x, y)

      if (typeof done === 'function') {
        done()
      }

      if (this.isLoop) {
        this.$emit('did-change', index - 1, lastIndex - 1)
      }
      else {
        this.$emit('did-change', index, lastIndex)
      }
    },

    moveTo(target, duration) {
      // console.log('moveTo %s form %s, duration=%s', target, this.currentIndex, duration)
      this.move(target - this.currentIndex, duration)
    },

    play() {
      const that = this

      window.setTimeout(function () {
        if (that.isTouching) {
          that.play()
        }
        else {
          that.move(1, that.duration, function () {
            that.play()
          })
        }
      }, this.delay)
    },

    _setTransform(x, y) {
      x = parseInt(x) || 0
      y = parseInt(y) || 0

      let pos = [x + 'px', y + 'px', '0px']
      let transform = 'translate3d(' + pos.join(',') + ')'
      this.$content.style.webkitTransform = transform
      this.$content.style.transform = transform
    },

    _setTransition(duration) {
      let transition = (duration === 0 || duration === 'none') ? 'none' : ((parseInt(duration) || this.duration) + 'ms')
      // console.log('_setTransition', duration, transition)
      this.$content.style.webkitTransition = transition
      this.$content.style.transition = transition
    },

    onClickButton(step) {
      if (!this.isMoving) {
        this.isMoving = true
        this.move(step)
      }
    },

    _slideStart(evt) {
      // console.log('CISlideView._slideStart', evt)
      evt.preventDefault()    // !important
      this.isTouching = true
      this.isDragging = true
      // this._setTransition()

      let currentX = (evt.touches) ? evt.touches[0].pageX : evt.clientX
      let currentY = (evt.touches) ? evt.touches[0].pageY : evt.clientY

      this.touchObject = {
        startX: currentX,
        startY: currentY,
        x: currentX,
        y: currentY
      }
    },

    _slideMove(evt) {
      // console.log('CISlideView._slideMove', evt)
      if (!this.isDragging) {
        return
      }
      let currentX = (evt.touches) ? evt.touches[0].pageX : evt.clientX
      let currentY = (evt.touches) ? evt.touches[0].pageY : evt.clientY

      this.touchObject.x = currentX
      this.touchObject.y = currentY

      if (this.direction == 'horizontal') {
        let dX = currentX - this.touchObject.startX

        // 滑动范围在阀值以内跟随移动
        if (Math.abs(dX) < this.itemWidth * 0.25) {
          this._setTransition('none')
          this._setTransform(this.position.x + dX, 0)
        }
        // 滑动范围超过阀值后自动移动
        else {
          this.isDragging = false
          this._setTransition(this.duration)

          if (dX > 0) {   // 向右拖动，往前翻页
            if (this.currentIndex == 0) {
              this.move(0)
            }
            else {
              this.move(-1)
            }
          }
          else {          // 向左拖动，往后翻页
            if (this.currentIndex == (this._itemCount - 1)) {
              this.move(0)
            }
            else {
              this.move(1)
            }
          }
        }
      }
      else if (this.direction == 'vertical') {
        let dY = currentY - this.touchObject.startY
        this._setTransform(0, this.position.y + dY)
      }
    },

    _slideEnd(evt) {
      // console.log('CISlideView._slideEnd', evt)
      this.isTouching = false
      this.isDragging = false
      // this._setTransition(this.duration)

      if (this.direction == 'horizontal') {
        let dX = this.touchObject.x - this.touchObject.startX

        // 当停止滑动时，移动范围在阀值以内则回归
        if (Math.abs(dX) < this.itemWidth * 0.25) {
          this.move(0)
        }
      }
      else if (this.direction == 'vertical') {
        this._setTransform(0, this.position.y + dY)
      }
    }
  }
}
</script>
