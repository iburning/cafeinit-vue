<template src="./_gridCell.html"></template>

<script>
import config from './_gridCell'

config.props.prefix = {
  type: String,
  default: 'ci-col-'
}

export default config
</script>
