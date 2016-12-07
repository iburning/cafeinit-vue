/**
 * @fileoverview checkbox list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-checkbox-list',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,

    value: {
      type: Array,
      default: function () {
        return []
      }
    },

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    },

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
