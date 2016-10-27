<template>
  <div class="my-grid">
    <ci-grid class="my-row">
      <ci-grid-cell class="my-cell" size="xs-6 md-6"></ci-grid-cell>
      <ci-grid-cell size="xs-6 md-6"></ci-grid-cell>
    </ci-grid>

    <ci-grid>
      <ci-grid-cell size="md-4"></ci-grid-cell>
      <ci-grid-cell size="md-4"></ci-grid-cell>
      <ci-grid-cell size="md-4"></ci-grid-cell>
    </ci-grid>

    <ci-grid>
      <ci-grid-cell size="md-4"></ci-grid-cell>
      <ci-grid-cell size="md-8"></ci-grid-cell>
    </ci-grid>

    <ci-grid>
      <ci-grid-cell size="xs-6 md-4"></ci-grid-cell>
      <ci-grid-cell size="xs-6 md-4"></ci-grid-cell>
      <ci-grid-cell size="xs-6 md-4"></ci-grid-cell>
      <ci-grid-cell size="xs-6 md-4"></ci-grid-cell>
      <ci-grid-cell size="xs-6 md-4"></ci-grid-cell>
      <ci-grid-cell size="xs-6 md-4"></ci-grid-cell>
    </ci-grid>
  </div>
</template>


<script>
export default {
  // ...
}
</script>


<style scoped>
.my-grid [class^=col-],
.my-grid [class^=am-u-],
.my-grid [class^=ci-col-] {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}
</style>
