/**
 * @fileOverview button
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

export default {
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
      this.$dispatch('click')
    }
  }
}
