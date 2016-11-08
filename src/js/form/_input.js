/**
 * @fileoverview form input
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    titleWidth: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    name: {
      type: String,
      default: ''
    },

    value: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateValue: function (value) {
      this.$refs.input.value = value
      this.$emit('input', value)
    }
  }
}
