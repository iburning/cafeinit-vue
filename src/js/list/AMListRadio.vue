<template src="./_listRadio.html"></template>

<script>
import config from './_listRadio'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style scoped>
.am-radio {
  padding-left: 0;
  margin: 0;
}
</style>
