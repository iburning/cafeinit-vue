<template src="./_select.html"></template>

<script>
import config from './_select'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
