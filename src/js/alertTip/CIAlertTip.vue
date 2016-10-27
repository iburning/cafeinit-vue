<template src="./_alertTip.html"></template>

<script>
import config from './_alertTip'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
