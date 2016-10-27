<template src="./_grid.html"></template>

<script>
import config from './_grid'

config.props.rowClass = {
  type: String,
  default: 'ci-row'
}

export default config
</script>
