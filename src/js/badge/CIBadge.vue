<template>
  <sup v-bind:class="className">{{text}}</sup>
</template>

<script>
export default {
  name: 'ci-badge',

  props: {
    ns: {
      type: String,
      default: 'am-'
    },

    value: [Number, String],

    style: {
      type: String,
      default: 'primary',     // primary secondary success warning danger success
    },

    shape: {
      type: String,
      default: 'round',     // round radius dot
    },

    max: {
      type: Number,
      default: 99
    }
  },

  computed: {
    className() {
      return [
        this.ns + 'badge',
        this.ns + 'badge-' + this.style,
        (this.shape == 'dot') ? this.ns + 'badge-dot' : (this.ns + this.shape)
      ]
    },

    text() {
      if (typeof this.value === 'string') {
        return this.value
      }

      if (this.value >= this.max) {
        return this.max + '+'
      }
      else {
        return this.value
      }
    }
  },

  mounted() {
    console.log('mounted', this.shape)
  }
}
</script>
