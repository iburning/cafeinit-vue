/**
 * @fileoverview alert tip
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-09
 */

export default {
  name: 'ci-alert-tip',

  props: {
    ns: String,

    value: {
      type: Boolean,
      default: false
    },

    isShowCloseButton: {
      type: Boolean,
      default: false
    },

    style: {
      type: String,
      default: 'info'   // success, info, warning, danger
    },

    duration: {
      type: Number,
      default: 2000
    }
  },

  data: function () {
    return {
      isShow: this.value,
      timer: null
    }
  },

  watch: {
    value(val) {
      this.isShow = val
    }
  },

  methods: {
    show() {
      this.isShow = true
      this.$emit('input', this.isShow)
      this.$emit('show', this)

      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (this.duration > 0) {
        this.autoClose()
      }
    },

    close() {
      this.isShow = false
      this.$emit('input', this.isShow)
      this.$emit('close', this)
    },

    autoClose() {
      var that = this

      this.timer = setTimeout(function () {
        that.close()
        clearTimeout(that.timer)
      }, this.duration)
    }
  }
}
