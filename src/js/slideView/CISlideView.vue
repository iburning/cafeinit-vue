<template>
  <div class="ci-slide-view" v-bind:style="wiewStyle">
    <div ref="content" class="ci-slide-view-content" v-bind:style="contentStyle">
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
    autoplay: {
      type: Boolean,
      default: true
    },

    index: {
      type: Number,
      default: 0
    },

    // itemCount: {
    //   type: Number,
    //   default: 1
    // },

    itemWidth: {
      type: Number,
      default: 100
    },

    itemHeight: {
      type: Number,
      default: 100
    },

    orientation: {
      type: String,
      default: 'horizontal'   // horizontal / vertical
    }
  },

  data() {
    return {
      currentIndex: this.index,
      itemCount: 0
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
      var style = {
        width: this.itemWidth * this.itemCount + 'px',
        height: this.itemHeight + 'px'
      }

      if (this.orientation == 'vertical') {
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
    this.itemCount = this.$items.length
    this.moveTo(this.currentIndex)
  },

  methods: {
    move(step) {
      var step = (step % this.itemCount);
      var lastIndex = this.currentIndex
      var index = this.currentIndex + step
      if (index < 0) {
        index = this.itemCount + index
      }
      if (index > (this.itemCount - 1)) {
        index = index - this.itemCount
      }
      this.currentIndex = index;

      for (var i; i < this.itemCount; i++) {
        // this.$items[i].actived = false
      }
      // this.$items[index].actived = true

      var x = 0
      var y = 0
      if (this.orientation == 'horizontal') {
        x = -this.itemWidth * index
      }
      else if (this.orientation == 'vertical') {
        y = -this.itemHeight * index
      }
      this.setPosition(x, y)

      console.log('from %s move %s step(s) to %s', lastIndex, step, index)
      this.$emit('did-move', index, lastIndex)
    },

    moveTo(target) {
      console.log('moveTo', target, this.currentIndex)
      this.move(target - this.currentIndex)
    },

    setPosition(x, y) {
      var pos = [x + 'px', y + 'px', '0px']
      var transform = 'translate3d(' + pos.join(',') + ')'
      // this.contentStyle.transform = transform
      // console.log('CISlideView.setPosition', x, y, this.contentStyle)
      this.$content.style.webkitTransform = transform
      this.$content.style.transform = transform
    }
  }
}
</script>
