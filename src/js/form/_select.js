/**
 * @fileoverview select
 * @author: burning <www.cafeinit.com>
 * @version: 2017-01-07
 */

export default {
  name: 'ci-select',

  props: {
    ns: String,
    name: String,

    options: {
      type: Array,
      default() {
        return []
      }
    },

    groups: {
      type: Array,
      default() {
        return []
      }
    },

    value: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
      myValue: this.value
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    }
  },

  methods: {
    onChange() {
      this.$emit('change', this.myValue)
      this.$emit('input', this.myValue)
    }
  }
}
