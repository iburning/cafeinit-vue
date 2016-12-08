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
    option: Object,

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
