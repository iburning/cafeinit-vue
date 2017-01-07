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
      default: function () {
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
    onChange: function (evt) {
      this.$emit('change', this.myValue)
      this.$emit('input', this.myValue)
    }
  }
}
