/**
 * @fileoverview alert
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

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: ''       // lg
    },

    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: '确认'
    }
  },

  data() {
    return {
      isActive: this.isShow
    }
  },

  watch: {
    isShow(val) {
      this.isActive = val
    }
  },

  mounted() {
    //
  },

  methods: {
    show() {
      this.isActive = true
    },

    close() {
      this.isActive = false
      this.$emit('close', 'button')
    },

    onClick(evt) {
      evt.stopPropagation();
    },

    closeViaDimmer() {
      if (this.isCloseViaDimmer) {
        this.isActive = false
        this.$emit('close', 'dimmer')
      }
    }
  }
}
