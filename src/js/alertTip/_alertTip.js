/**
 * @fileoverview alert tip
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-18
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    isShow: {
      type: Boolean,
      default: false,
      twoWay: true
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
      timer: null
    }
  },

  methods: {
    show() {
      this.isShow = true

      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (this.duration > 0) {
        this.autoClose()
      }
    },

    close() {
      this.isShow = false
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
