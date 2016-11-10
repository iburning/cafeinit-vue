/**
 * @fileoverview pagination
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-10
 */

export default {
  props: {
    ns: String,

    page: {
      type: Number,
      default: 1
    },

    totalPage: {
      type: Number,
      default: 1
    },

    showCount: {     // 显示按钮个数
      type: Number,
      default: 9
    },

    isShowNext: {
      type: Boolean,
      default: false
    },

    isShowLast: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentPage: this.page
    }
  },

  watch: {
    page(val, oldVal) {
      if (val != oldVal) {
        this.currentPage = val
      }
    }
  },

  computed: {
    pages: function () {
      var pages = [];
      var x = parseInt(this.showCount / 2)
      var start = this.currentPage - x
      start = (start <= 0) ? 1 : start
      var end = start + this.showCount - 1
      end = (end > this.totalPage) ? this.totalPage : end
      start = end - this.showCount + 1;
      start = (start <= 0) ? 1 : start

      for (var i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    },

    prevPage: function () {
      var page = this.currentPage - 1
      page = (page <= 0) ? 1 : page

      return page
    },

    nextPage: function () {
      var page = this.currentPage + 1
      page = (page > this.totalPage) ? this.totalPage : page

      return page
    }
  },

  methods: {
    onClickItem: function (page) {
      this.currentPage = page
      this.$emit('click-item', page)
    }
  }
}
