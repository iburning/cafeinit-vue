<template src="./_listCheckbox.html"></template>

<script>
import config from './_listCheckbox'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
