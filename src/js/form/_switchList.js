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
      myValue: this.value
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    },

    myValue(val) {
      this.$emit('input', val)
    }
  }
}
