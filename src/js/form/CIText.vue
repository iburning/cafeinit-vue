<template src="./_text.html"></template>

<script>
import config from './_text'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
