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
      default: function () {
        return {}
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
    }
  },

  methods: {
    onChange: function (evt) {
      this.$emit('input', this.currentValue)
    },

    onClick: function () {
      this.$emit('click', this.currentValue)
    }
  }
}
