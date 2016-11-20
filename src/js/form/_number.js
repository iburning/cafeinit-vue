/**
 * @fileoverview form number
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

export default {
  name: 'ci-number',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    value: {
      type: [Number, String],
      default: 0
    },

    step: {
      type: Number,
      default: 1
    },

    min: {
      type: Number,
      // default: Number.MIN_VALUE
      default: 0
    },

    max: {
      type: Number,
      // default: Number.MAX_VALUE
      default: 100
    },

    size: {
      type: Number,
      default: 4
    },

    placeholder: String,

    disabled: {
      type: Boolean,
      default: false
    },

    autoComplete: {
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
      this.currentValue = Number(val) || 0
    }
  },

  methods: {
    checkValue(value) {
      value = (value < this.min) ? this.min : value;
      value = (value > this.max) ? this.max : value;
      return value;
    },

    reduce() {
      this.currentValue = this.checkValue(this.currentValue - this.step)
      this.$emit('input', this.currentValue)
    },

    increase() {
      this.currentValue = this.checkValue(this.currentValue + this.step)
      this.$emit('input', this.currentValue)
    },

    onChange(evt) {
      this.$emit('change', this.currentValue)
    },

    onInput(evt) {
      this.$emit('input', this.currentValue)
    }
  }
}
