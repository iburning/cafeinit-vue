export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    items: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
}
