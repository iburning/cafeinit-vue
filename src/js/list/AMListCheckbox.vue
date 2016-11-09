<template src="./_listCheckbox.html"></template>

<script>
import config from './_listCheckbox'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style scoped>
.am-checkbox {
  padding-left: 0;
  margin: 0;
}
</style>
