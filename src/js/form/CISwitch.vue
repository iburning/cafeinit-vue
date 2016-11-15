<template src="./_switch.html"></template>

<script>
import config from './_switch'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
