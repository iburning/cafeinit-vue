/**
 * @fileoverview ci-alert
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-28
 */

export default {
  name: 'ci-alert',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    size: String,     // lg
    title: String,
    content: String,

    okText: {
      type: String,
      default: '确认'
    },

    isCloseViaDimmer: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    modalOnClick() {
      if (this.isCloseViaDimmer) {
        this.$emit('close', 'dimmer')
      }
    },

    buttonOnClick() {
      this.$emit('close', 'button')
    }
  }
}
