<template src="./_listSwitch.html"></template>

<script>
import config from './_listSwitch'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style scoped>
.am-switch {
  margin: 0;
}
</style>
