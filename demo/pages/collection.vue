<template>
  <div class="page-collection">
    <ci-collection class="items">
      <ci-collection-cell>
        <div class="item">1</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">2</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">3</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">4</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">5</div>
      </ci-collection-cell>

      <ci-collection-cell>
        <div class="item">1</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">2</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">3</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">4</div>
      </ci-collection-cell>
      <ci-collection-cell>
        <div class="item">5</div>
      </ci-collection-cell>
    </ci-collection>
  </div>
</template>

<script>
export default {
  name: 'page-collection'
}
</script>

<style>
.items {
  padding: 0 5px;
}

.item {
  background: #fff;
  height: 150px;
  padding: 5px;
  margin: 5px;
}
</style>
