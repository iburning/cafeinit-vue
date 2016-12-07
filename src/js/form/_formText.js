/**
 * @fileoverview form text
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-form-text',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    value: [String, Number],

    type: {
      type: String,
      default: 'text'
    },

    maxlength: Number,
    placeholder: String,

    disabled: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String,
      default: 'off'
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
      this.$emit('change', this.currentValue)
    },

    onInput: function (evt) {
      this.$emit('input', this.currentValue)
    }
  }
}
