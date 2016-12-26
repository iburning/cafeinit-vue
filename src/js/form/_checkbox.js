/**
 * @fileoverview checkbox
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-checkbox',

  props: {
    ns: String,
    name: String,
    inline: String,
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
      this.$emit('input', this.myValue)
    },

    onClick: function () {
      this.$emit('click', this.myValue)
    }
  }
}
