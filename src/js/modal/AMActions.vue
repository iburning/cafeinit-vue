<template src="./_actions.html"></template>

<script>
import config from './_actions.js'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style lang="less" src="../../less/am-modal.less" scoped></style>
