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
    name: String,
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

      // if (typeof this.myValue === 'boolean') {
      //   this.myValue = [ this.myValue ]
      // }

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
    },

    myValue(val) {
      this.$emit('input', val)
    }
  },

  methods: {
    onChange(evt) {
      // console.log('onChange', this.myValue, evt.target.checked)
      // if (this.myValue.length > 1) {
      //   this.$emit('input', this.myValue)
      // }
      // else {
      //   this.$emit('input', evt.target.checked)
      // }
    },

    onClick(index) {
      // console.log('onClick', index)
      // this.$emit('click', index)
    }
  }
}
