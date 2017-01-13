/**
 * @fileoverview switch
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-switch',

  props: {
    ns: String,
    name: String,
    inline: String,
    value: [Array, Boolean],
    option: {
      type: Object,
      default() {
        return {}
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
    }
  },

  methods: {
    onChange() {
      this.$emit('input', this.myValue)
    }
  }
}
