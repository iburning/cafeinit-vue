/**
 * @fileoverview CICompnentHelper
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-27
 */

module.exports = {
  addClass(component, className) {
    let $el = component.$el
    let classNames = $el.className.split(' ')

    if (classNames.indexOf(className) < 0) {
      classNames.push(className)
      $el.className = classNames.join(' ')
      component.$emit('add-class', className)
    }
  },

  removeClass(component, className) {
    let $el = component.$el
    let classNames = $el.className.split(' ')

    if (classNames.indexOf(className) >= 0) {
      classNames.splice(classNames.indexOf(className), 1)
      $el.className = classNames.join(' ')
      component.$emit('remove-class', className)
    }
  }
}
