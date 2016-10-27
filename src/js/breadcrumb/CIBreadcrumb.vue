<template src="./_breadcrumb.html"></template>

<script>
import config from './_breadcrumb'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
