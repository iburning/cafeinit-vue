<template src="./_grid.html"></template>

<script>
import config from './_grid'

config.props.rowClass = {
  type: String,
  default: 'am-g'
}

export default config
</script>
