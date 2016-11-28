/**
 * @fileoverview ci-actions
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-28
 */

export default {
  name: 'ci-actions',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },

    cancelText: {
      type: String,
      default: '取消'
    },

    items: {
      type: Array,
      default: function () {
        return []
      }
    },

    index: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      selectedIndex: this.index
    }
  },

  watch: {
    isShow(val) {
      this.isActive = val
    }
  },

  methods: {
    modalOnClick() {
      this.$emit('cancel', 'dimmer')
    },

    itemOnClick(index, item) {
      this.selectedIndex = index
      this.$emit('click-item', index, item)
    },

    cancelButtonOnClick() {
      this.$emit('cancel', 'button')
    }
  }
}