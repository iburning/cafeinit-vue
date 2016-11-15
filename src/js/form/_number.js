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
      default: Number.MIN_VALUE
    },

    max: {
      type: Number,
      default: Number.MAX_VALUE
    },

    size: {
      type: Number,
      default: 3
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

  methods: {
    reduce() {
      var value = this.currentValue - this.step;
      if (value < this.min) {
        value = this.min;
      }
      else {
        value = value;
      }
      console.log('CINumber.reduce', this.step, value);
      this.currentValue = value;
      this.$emit('input', value)
    },

    increase() {
      var value = this.currentValue + this.step;
      if (value > this.max) {
        value = this.max;
      }
      else {
        value = value;
      }
      console.log('CINumber.increase', this.step, value)
      this.currentValue = value;
      this.$emit('input', value)
    },

    onChange: function (evt) {
      console.log('CINumber.onChange', this.currentValue)
      this.$emit('change', this.currentValue)
    },

    onInput: function (evt) {
      console.log('CINumber.input', this.currentValue)
      this.$emit('input', this.currentValue)
    }
  }
}
