/**
 * @fileoverview form switch
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

export default {
  name: 'ci-switch',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    title: String,
    titleWidth: String,
    name: String,

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    },

    value: {
      type: Array,
      default: function () {
        return []
      }
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
    onChange: function (evt) {
      this.$emit('input', this.model)
    }
  }
}
