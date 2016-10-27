/**
 * @fileoverview link button
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

export default {
  name: 'ci-link-button',

  props: {
    ns: {
      type: String,
      default: ''
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
    },

    to: {
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
