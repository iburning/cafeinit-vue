/**
 * @fileoverview radio list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-08
 */

export default {
  name: 'ci-radio-list',

  props: {
    ns: String,
    title: String,
    name: String,
    value: [String, Boolean],

    options: {
      type: Array,
      default() {
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
