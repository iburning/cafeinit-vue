<template src="./_table.html"></template>

<script>
import config from './_table'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
