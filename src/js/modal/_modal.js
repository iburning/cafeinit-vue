/**
 * @fileoverview ci-modal
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-28
 */

export default {
  name: 'ci-modal',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: ''       // lg
    }
  },

  methods: {
    onClick(evt) {
      if (this.isCloseViaDimmer) {
        this.$emit('close', 'dimmer', this)
      }
    }
  }
}
