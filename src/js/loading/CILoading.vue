<template>
  <div class="ci-loading">
    <i v-bind:class="iconName"></i>
  </div>
</template>

<script>
export default {
  name: 'ci-loading',

  props: {
    type: {
      type: String,
      default: 'circle'
    },

    size: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    iconName() {
      const NAMES = {
        // pulse: 'pulse',
        // spinner: 'spinner',
        circle: 'icon-loading',
        refresh: 'icon-refresh',
        gear: 'icon-settings'
      }

      let name = 'iconfont ' + (NAMES[this.type] || NAMES.circle)

      // if (this.size) {
      //   name += ' ' + 'icon-' + this.size + 'x'
      // }

      return 'ci-spin ' + name
    }
  }
}
</script>
