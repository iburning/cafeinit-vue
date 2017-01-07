/**
 * @fileoverview textarea
 * @author: burning <www.cafeinit.com>
 * @version: 2017-01-07
 */

export default {
  name: 'ci-textarea',

  props: {
    ns: String,
    name: String,
    value: [String, Number],
    placeholder: [String, Number],

    cols: [Number, String],
    rows: [Number, String],
    maxlength: [Number, String],

    disabled: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String,
      default: 'off'
    }
  },

  methods: {
    onChange: function (evt) {
      this.$emit('change', evt.target.value)
    },

    onInput: function (evt) {
      this.$emit('input', evt.target.value)
    }
  }
}
