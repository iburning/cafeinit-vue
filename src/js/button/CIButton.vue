<template src="./_button.html"></template>

<script>
import config from './_button'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
