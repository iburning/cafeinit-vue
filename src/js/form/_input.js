/**
 * @fileoverview form input
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    value: [String, Number],
    placeholder: String,
    maxlength: Number,
    minlength: Number,

    type: {
      type: String,
      default: 'text'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    autoComplete: {
      type: String,
      default: 'off'
    }
  },

  methods: {
    updateValue: function (value) {
      // this.$refs.input.value = value
      this.$emit('input', value)
    }
  }
}
