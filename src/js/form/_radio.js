/**
 * @fileoverview radio
 * @author burning <www.cafeinit.com>
 * @version 2017-08-22
 */

export default {
  name: 'ci-radio',

  props: {
    ns: String,
    name: String,
    inline: String,
    value: [String, Boolean],
    option: Object,

    options: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      myValue: this.value
    }
  },

  computed: {
    index() {
      for (let i = 0; i < this.options.length; i ++) {
        if (this.options[i].value == this.myValue) {
          return i
        }
      }
      return -1
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    }
  },

  methods: {
    onChange() {
      this.$emit('input', this.myValue)
    },

    onClick() {
      this.$emit('click', this.myValue)
    }
  }
}
