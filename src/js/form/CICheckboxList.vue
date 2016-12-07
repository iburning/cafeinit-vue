<template src="./_checkboxList.html"></template>

<script>
import config from './_checkboxList'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
