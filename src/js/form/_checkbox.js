/**
 * @fileoverview form checkbox
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-11
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    model: {
      type: Array,
      default: function () {
        return []
      }
    },

    title: {
      type: String,
      default: ''
    },

    titleWidth: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      required: true
    },

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    },

    inline: {
      type: String,
      default: ''
    }
  }
}
