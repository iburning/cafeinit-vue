/**
 * @fileoverview switch
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
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
  },

  methods: {
    onChange(evt) {
      this.currentValue = !this.currentValue;
      console.log('_switch.onChange', this.currentValue)
      this.$emit('input', this.currentValue)
    }
  }
}
