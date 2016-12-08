<template src="./_switchList.html"></template>

<script>
import config from './_switchList'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
