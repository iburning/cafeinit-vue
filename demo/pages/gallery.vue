<template>
  <div class="page-gallery">
    <ci-gallery class="items">
      <ci-gallery-cell>
        <div class="item">1</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">2</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">3</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">4</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">5</div>
      </ci-gallery-cell>

      <ci-gallery-cell>
        <div class="item">1</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">2</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">3</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">4</div>
      </ci-gallery-cell>
      <ci-gallery-cell>
        <div class="item">5</div>
      </ci-gallery-cell>
    </ci-gallery>
  </div>
</template>

<script>
export default {
  name: 'page-gallery'
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
