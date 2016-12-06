/**
 * @fileoverview form switch
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

export default {
  name: 'ci-switch',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    value: {
      type: Boolean,
      default: true
    },

    disabled: {
      type: Boolean,
      default: false
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
    }
  }
}
