/**
 * @fileoverview form input
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  name: 'ci-input',

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
    onChange: function (evt) {
      // console.log('_input.onChange', evt.target.value)
      this.$emit('change', evt.target.value)
    },

    onInput: function (evt) {
      // console.log('_input.onInput', evt.target.value)
      this.$emit('input', evt.target.value)
    }
  }
}
