<template>
  <div class="page-navigation">
    <ci-navigation title="Navigation">
      <ci-button slot="left-item" style="link" size="xs">Back</ci-button>
      <ci-button slot="right-item" style="link" size="xs">More</ci-button>
    </ci-navigation>

    <!-- <ci-navigation>
      <div slot="title">Customer Title</div>
      <ci-button slot="right-item" style="link" size="xs">More</ci-button>
    </ci-navigation> -->
  </div>
</template>

<script>
export default {
  name: 'page-navigatioin'
}
</script>
