<template src="./_linkButton.html"></template>

<script>
import config from './_linkButton'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
