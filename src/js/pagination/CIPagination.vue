<template src="./_pagination.html"></template>

<script>
import config from './_pagination'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
