/**
 * @fileoverview alert tip
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-09
 */

export default {
  name: 'ci-alert-tip',

  props: {
    ns: String,

    isShow: {
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
      isActive: this.isShow,
      timer: null
    }
  },

  methods: {
    show() {
      this.isActive = true

      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (this.duration > 0) {
        this.autoClose()
      }
    },

    close() {
      this.isActive = false
      this.$emit('close')
    },

    autoClose() {
      var that = this
      // console.log('autoClose', this.timer)

      this.timer = setTimeout(function () {
        that.close()
        clearTimeout(that.timer)
      }, this.duration)
    }
  }
}
