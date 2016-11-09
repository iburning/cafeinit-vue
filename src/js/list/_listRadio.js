/**
 * @fileoverview radio list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-11
 */

export default {
  name: 'ci-list-radio',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,
    inline: String,

    value: [String, Number],

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
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
