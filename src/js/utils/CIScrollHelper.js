
/**
 * @fileoverview CIScrollHelper
 * @author: burning <www.cafeinit.com>
 * @version: 2016-08-22
 */

function CIScrollHelper(opt) {
  this.lastContentHeight = 0;     // 最近一次滑动内容的高度
  this.willScrollToEnd = false;   // 是否即将滑动到底部
  this.lead = 100;                // 相差底部多少时触发事件
  this.init(opt);
}

module.exports = CIScrollHelper;

var prototype = CIScrollHelper.prototype;

prototype.init = function (opt) {
  opt = opt || {};
  this.$container = opt.container;
  this.$content = opt.content;
  this.lead = opt.lead || this.lead;
  this.willScrollToEndHandler = opt.willScrollToEndHandler;

  this._bindEvent();
};


prototype._bindEvent = function () {
  var that = this;

  that.$container.on('scroll', function (evt) {
    that.scrollTop = that.$container.scrollTop();
    that.containerHeight = that.$container.height();
    that.contentHeight = that.$content.height();

    var delta = that.contentHeight - that.scrollTop - that.containerHeight;
    console.log('CIScrollHelper.scroll', that.scrollTop, delta);
    if (that.lastContentHeight != that.contentHeight) {
      that.lastContentHeight = that.contentHeight;
      that.willScrollToEnd = false;
    }

    if (delta <= that.lead) {
      // console.log('willEnd', this.willEnd);
      if (!that.willScrollToEnd && typeof that.willScrollToEndHandler === 'function') {
        that.willScrollToEnd = true;
        that.willScrollToEndHandler();
      }
    }
  });
};
