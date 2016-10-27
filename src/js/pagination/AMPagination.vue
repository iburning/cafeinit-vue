<template src="./_pagination.html"></template>

<script>
import config from './_pagination'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>
