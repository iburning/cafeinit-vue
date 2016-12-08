/**
 * @fileoverview switch list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-08
 */

export default {
  name: 'ci-switch-list',

  props: {
    ns: String,
    title: String,
    name: String,
    value: [Array, Boolean],

    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  data() {
    return {
      currentValue: this.value
    }
  },

  watch: {
    value(val) {
      this.currentValue = val
    },

    currentValue(val) {
      this.$emit('input', this.currentValue)
    }
  }
}
