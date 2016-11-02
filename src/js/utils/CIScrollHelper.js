/**
 * @fileOverview CIScrollHelper
 * @author: burning <www.cafeinit.com>
 * @date: 2016-11-02
 */

function CIScrollHelper(opt) {
  this.isListenScrollToStart = false;   // 是否开启监听——滑动到顶部
  this.isListenScrollToEnd = true;      // 是否开启监听——滑动到低部
  this.leadStart = 25;                  // 相差顶部多少时触发事件
  this.leadEnd = 100;                   // 相差底部多少时触发事件
  this.init(opt);
}

module.exports = CIScrollHelper;

var prototype = CIScrollHelper.prototype;

prototype.init = function (opt) {
  opt = opt || {};
  this.$container = opt.container;
  this.$content = opt.content;
  this.leadEnd = opt.leadEnd || this.leadEnd;
  this.willScrollToStartHandler = opt.willScrollToStartHandler;
  this.willScrollToEndHandler = opt.willScrollToEndHandler;

  this._bindEvent();
};


prototype._bindEvent = function () {
  var that = this;

  that.$container.on('scroll', function (evt) {
    that.scrollTop = that.$container.scrollTop();
    that.containerHeight = that.$container.height();
    that.contentHeight = that.$content.height();

    if (that.scrollTop <= that.leadStart) {
      if (that.isListenScrollToStart) {
        console.log('willScrollToStart');
        that.isListenScrollToStart = false;

        if (typeof that.willScrollToStartHandler === 'function') {
          that.willScrollToStartHandler();
        }
      }
    }
    else {
      that.isListenScrollToStart = true;
    }


    var delta = that.contentHeight - that.scrollTop - that.containerHeight;
    // console.log('CIScrollHelper.scroll', that.scrollTop, delta);

    if (delta <= that.leadEnd) {
      if (that.isListenScrollToEnd) {
        console.log('willScrollToEnd');
        that.isListenScrollToEnd = false;

        if (typeof that.willScrollToEndHandler === 'function') {
          that.willScrollToEndHandler();
        }
      }
    }
    else {
      that.isListenScrollToEnd = true;
    }
  });
};

prototype.scrollTo = function (x, y) {
  this.$container.scrollLeft(x);
  this.$container.scrollTop(y);
};
