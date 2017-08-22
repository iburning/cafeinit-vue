/**
 * @fileoverview radio list
 * @author burning <www.cafeinit.com>
 * @version 2017-08-22
 */

export default {
  name: 'ci-radio-list',

  props: {
    ns: String,
    title: String,
    name: String,
    value: [String, Boolean],

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

  watch: {
    value(val) {
      this.myValue = val
    },

    myValue(val) {
      this.$emit('input', val)
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

  methods: {
    onChange() {
      // this.$emit('input', this.myValue)
    },

    onClick() {
      // this.$emit('click', this.myValue)
    }
  }
}
