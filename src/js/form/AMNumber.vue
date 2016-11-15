<template src="./_number.html"></template>

<script>
import config from './_number'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style lang="less" scoped>
.am-number {
  @height: 30px;

  .btn-minus, .btn-plus {
    display: inline-block;
    width: @height;
    height: @height;
    padding: 0;
    line-height: @height;
  }

  input {
    display: inline-block;
    height: @height;
    padding: 0 0.5em;
    line-height: @height;
    text-align: center;
  }
}
</style>
