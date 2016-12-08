/**
 * @fileoverview checkbox
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-checkbox',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    inline: String,

    // value: {
    //   type: Array,
    //   default: function () {
    //     return []
    //   }
    // },

    value: [Array, Boolean],

    items: {
      type: Array,
      default: function () {
        return []
      }
    },

    item: Object,

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
    onChange: function (evt) {
      this.$emit('input', this.currentValue)
    }
  }
}
