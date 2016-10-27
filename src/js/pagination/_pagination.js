/**
 * @fileOverview pagination
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    currentPage: {
      type: Number,
      default: 1,
      twoWay: true
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
    itemOnClick: function (page) {
      this.currentPage = page
      this.$dispatch('item-click', page)
    }
  }
}
