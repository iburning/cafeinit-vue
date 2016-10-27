/**
 * @fileOverview form input
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    model: {
      type: String,
      default: '',
      twoWay: true
    },

    title: {
      type: String,
      default: ''
    },

    titleWidth: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    name: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
}
