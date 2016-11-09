<template src="./_form.html"></template>

<script>
import config from './_form'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
