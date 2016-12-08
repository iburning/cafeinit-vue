<template src="./_radioList.html"></template>

<script>
import config from './_radioList'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
