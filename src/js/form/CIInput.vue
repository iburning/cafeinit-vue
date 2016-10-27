<template src="./_input.html"></template>

<script>
import config from './_input'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
