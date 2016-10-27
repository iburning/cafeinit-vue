/**
 * @fileoverview button
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

export default {
  name: 'ci-button',

  props: {
    ns: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'button'
    },

    style: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: ''
    },

    block: {
      type: String,
      default: ''
    },

    radius: {
      type: String,
      default: ''
    },

    round: {
      type: String,
      default: ''
    },

    status: {
      type: String,
      default: ''
    }
  },

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
