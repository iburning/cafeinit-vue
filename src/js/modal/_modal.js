/**
 * @fileoverview modal
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-05
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    isShow: {
      type: Boolean,
      default: false
    },

    isCloseViaDimmer: {   // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: ''       // lg
    },

    marginTop: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      xIsShow: this.isShow
    }
  },

  transitions: {
    'modal-fade': {
      beforeEnter(el) {
        // ...
      },

      enter(el) {
        // ...
      },

      afterEnter(el) {
        // ...
      },

      enterCancelled(el) {
        // ...
      },

      beforeLeave(el) {
        // ...
      },

      leave(el) {
        // ...
      },

      afterLeave(el) {
        // ...
      },

      leaveCancelled(el) {
        // ...
      }
    }
  },

  mounted() {
    // ...
  },

  watch: {
    isShow(val, oldVal) {
      // console.log('modal', this.$el, this)
      if (val) {
        var dialog = this.$el.querySelector('.' + this.ns + 'modal')
        this.marginTop = - parseInt(dialog.offsetHeight / 2)
      }
    }
  },

  methods: {
    show() {
      this.xIsShow = true
    },

    close() {
      this.xIsShow = false
    },

    closeViaDimmer() {
      if (this.isCloseViaDimmer) {
        this.xIsShow = false
      }
    }
  }
}
