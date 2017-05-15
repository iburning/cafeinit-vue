/**
 * @fileoverview ci-confirm
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-28
 */

export default {
  name: 'ci-confirm',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    size: String,     // lg
    title: String,
    content: {
      type: String,
      default: 'Are you kidding?'
    },

    okText: {
      type: String,
      default: '确认'
    },

    cancelText: {
      type: String,
      default: '取消'
    }
  },

  methods: {
    cancel() {
      this.$emit('cancel')
    },

    ok() {
      this.$emit('ok')
    }
  }
}
