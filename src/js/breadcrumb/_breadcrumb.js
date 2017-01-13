/**
 * @fileoverview breadcrumb
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-18
 */

export default {
  name: 'ci-breadcrumb',

  props: {
    ns: {
      type: String,
      default: ''
    },

    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
