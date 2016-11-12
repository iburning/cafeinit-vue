<template>
  <div class="page-navigation">
    <ci-navigation title="Navigation">
      <ci-link-button slot="left-item" style="link" size="xs">Back</ci-link-button>
      <ci-link-button slot="right-item" style="link" size="xs">More</ci-link-button>
    </ci-pagination>
  </div>
</template>

<script>
export default {
  name: 'page-navigatioin'
}
</script>
