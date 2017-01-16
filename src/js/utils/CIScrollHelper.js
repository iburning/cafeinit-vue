/**
 * @fileoverview CIScrollHelper
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-02
 */

function CIScrollHelper(opt) {
  this.isListenScrollToStart = false   // 是否开启监听——滑动到顶部
  this.isListenScrollToEnd = true      // 是否开启监听——滑动到低部
  this.leadStart = 25                  // 相差顶部多少时触发事件
  this.leadEnd = 100                   // 相差底部多少时触发事件
  this.init(opt)
}

module.exports = CIScrollHelper

const prototype = CIScrollHelper.prototype

prototype.init = function (opt) {
  opt = opt || {}
  this.$container = opt.container
  this.$content = opt.content
  this.leadEnd = opt.leadEnd || this.leadEnd
  this.willScrollToStartHandler = opt.willScrollToStartHandler
  this.willScrollToEndHandler = opt.willScrollToEndHandler

  this._bindEvent()
}


prototype._bindEvent = function () {
  this.$container.on('scroll', (evt) => {
    this.scrollTop = this.$container.scrollTop()
    this.containerHeight = this.$container.height()
    this.contentHeight = this.$content.height()

    if (this.scrollTop <= this.leadStart) {
      if (this.isListenScrollToStart) {
        // console.log('willScrollToStart')
        this.isListenScrollToStart = false

        if (typeof this.willScrollToStartHandler === 'function') {
          this.willScrollToStartHandler()
        }
      }
    }
    else {
      this.isListenScrollToStart = true
    }


    let delta = this.contentHeight - this.scrollTop - this.containerHeight
    // console.log('CIScrollHelper.scroll', this.scrollTop, delta)

    if (delta <= this.leadEnd) {
      if (this.isListenScrollToEnd) {
        // console.log('willScrollToEnd')
        this.isListenScrollToEnd = false

        if (typeof this.willScrollToEndHandler === 'function') {
          this.willScrollToEndHandler()
        }
        this.isListenScrollToEnd = true
      }
    }
    else {
      this.isListenScrollToEnd = true
    }
  })
}

prototype.scrollTo = function (x, y) {
  this.$container.scrollLeft(x)
  this.$container.scrollTop(y)
}
