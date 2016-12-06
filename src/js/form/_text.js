/**
 * @fileoverview form text
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-text',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    value: [String, Number, Boolean],
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
      // console.log('_text.onChange', evt.target.value)
      this.$emit('change', evt.target.value)
    },

    onInput: function (evt) {
      // console.log('_text.onInput', evt.target.value)
      this.$emit('input', evt.target.value)
    }
  }
}
