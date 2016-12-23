/**
 * @fileoverview table
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-12
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    headers: {
      type: Array,
      default() {
        return [];
      }
    },

    data: {
      type: Array,
      default() {
        return [];
      }
    },

    itemsClassName: {
      type: Array,
      default() {
        return [];
      }
    },

    striped: {
      type: String,
      default: ''
    },

    bordered: {
      type: String,
      default: ''
    },

    hover: {
      type: String,
      default: ''
    }
  }
}
