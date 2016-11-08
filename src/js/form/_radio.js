/**
 * @fileoverview form radio
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    inline: String,

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    },

    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      model: this.value
    }
  },

  watch: {
    value(val) {
      this.model = this.value
    }
  },

  methods: {
    updateValue: function (value) {
      // console.log('_radio.updateValue', typeof value, this.model)
      this.$emit('input', this.model)
    }
  }
}
