<template>
  <div v-bind:class="className" v-bind:style="{ width: width + 'px' }">
    <div class="ci-progress-light" v-bind:style="{ width: lightWidth + 'px' }">
      <span v-if="isShowValue" class="ci-progress-value">{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ci-progress',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    width: {          // 组件宽度
      type: [Number, String],
      default: 200
    },

    max: {
      type: [Number, String],
      default: 100
    },

    value: {
      type: [Number, String],
      default: 0
    },

    color: {
      type: String,
      default: 'primary'
    },

    size: {
      type: String,
      default: ''
    },

    block: {
      type: String,
      default: ''
    },

    radius: {
      type: String,
      default: ''
    },

    round: {
      type: String,
      default: ''
    },

    isShowValue: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    className() {
      return [
        this.ns + 'progress',
        this.color ? (this.ns + 'progress-' + this.color) : '',
        this.size ? (this.ns + 'progress-' + this.size) : '',
        this.block ? (this.ns + 'progress-block') : '',
        this.radius ? (this.ns + 'progress-radius') : '',
        this.round ? (this.ns + 'progress-round') : ''
      ]
    },

    lightWidth() {
      let ratio = 1
      if (this.max > 0) {
        ratio = this.value / this.max
      }
      ratio = (ratio >= 1) ? 1 : ratio
      return this.width * ratio
    }
  }
}
</script>
