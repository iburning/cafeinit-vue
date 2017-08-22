/**
 * @fileoverview checkbox
 * @author burning <www.cafeinit.com>
 * @version 2017-08-22
 */

export default {
  name: 'ci-checkbox',

  props: {
    ns: String,
    name: String,
    inline: String,
    value: [Array, Boolean],
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
    ids() {
      let ids = []

      if (this.myValue instanceof Array) {
        this.myValue.forEach((item) => {
          this.options.forEach((option, i) => {
            if (option.value == item) {
              ids.push(i)
            }
          })
        })
      }
      else {
        if (this.myValue) {
          ids.push(0)
        }
      }

      return ids
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
