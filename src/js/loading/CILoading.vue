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
        pulse: 'pulse',
        spinner: 'spinner',
        circle: 'circle-o-notch',
        refresh: 'refresh',
        gear: 'gear'
      }

      let name = 'fa fa-' + (NAMES[this.type] || NAMES.circle)

      if (this.size) {
        name += ' ' + 'fa-' + this.size + 'x'
      }

      return name + ' fa-spin'
    }
  }
}
</script>
